# Schema.rb
#  t.boolean "round_trip"
#  t.integer "distance"

class AirTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user

  before_create :calc_distance
  after_create :create_emission

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
