# Schema.rb
# t.bigint 'user_id'
# t.boolean 'round_trip', default: true
# t.string 'departure'
# t.string 'arrival'
# t.float 'distance', default: 0.0
# t.float 'departure_latitude'
# t.float 'departure_longitude'
# t.float 'arrival_latitude'
# t.float 'arrival_longitude'

class AirTrip < ApplicationRecord
  validates :user_id,
            :departure,
            :arrival,
            :departure_latitude,
            :departure_longitude,
            :arrival_latitude,
            :arrival_longitude,
            presence: true
  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user

  before_create :calc_distance
  after_create :create_emission

  attribute :amount

  def amount
    emission.amount
  end

  def calc_distance
    p = 0.017453292519943295 # PI / 180
    a =
      0.5 - Math.cos((arrival_latitude - departure_latitude) * p) / 2 +
        Math.cos(departure_latitude * p) * Math.cos(arrival_latitude * p) *
          (1 - Math.cos((arrival_longitude - departure_longitude) * p)) / 2
    distance = 12_742 * Math.asin(Math.sqrt(a))
    self.distance = distance.round(2)
  end

  def emitted_carbon
    (distance * 0.255).round(2) if distance < 1500
    (distance * 0.15).round(2) if distance > 2200
    (distance * 0.156).round(2)
  end

  def create_emission
    Emission.create!(user_id: self.user.id, emissionable: self, amount: self.emitted_carbon)
  end
end
