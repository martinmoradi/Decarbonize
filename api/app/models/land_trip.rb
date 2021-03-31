#  Schema.rb
#  t.string "vehicle_type", default: 'diesel_car'
#  t.integer "distance"
#  t.boolean "round_trip", default: false

class LandTrip < ApplicationRecord
  validates :user_id, presence: true, numericality: { only_integer: true }

  validates :distance, presence: true, numericality: { greater_than: 0 }

  validates :user_id,
            presence: true,
            inclusion: {
              in: %w[diesel_car petrol_car electric_car bus tramway metro train],
            }

  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user
  has_many :regular_trips
  after_create :create_emission
  scope :cars,
        -> {
          where(vehicle_type: 'diesel_car')
            .or(where(vehicle_type: 'petrol_car'))
            .or(where(vehicle_type: 'electric_car'))
        }
  scope :bus, -> { where(vehicle_type: 'bus') }
  scope :tramway, -> { where(vehicle_type: 'tramway') }
  scope :metro, -> { where(vehicle_type: 'metro') }
  scope :train, -> { where(vehicle_type: 'train') }

  attribute :amount

  def amount
    emission.amount
  end

  def is_eco_driving?(emissions)
    emissions if vehicle_type != 'diesel_car' || vehicle_type != 'petrol_car'
    user.user_commitments.where(commitment_id: 3).exists? ? (emissions * 0.85) : emissions
  end

  # Per trip in kgs

  def emitted_carbon
    case vehicle_type
    when 'electric_car'
      round_trip ? (0.0198 * distance * 2) : (0.0198 * distance)
    when 'diesel_car'
      emissions = round_trip ? (0.157 * distance * 2) : (0.157 * distance)
      is_eco_driving?(emissions)
    when 'petrol_car'
      emissions = round_trip ? (0.1649 * distance * 2) : (0.1649 * distance)
      is_eco_driving?(emissions)
    when 'bus'
      round_trip ? (0.104 * distance * 2) : (0.104 * distance)
    when 'tramway'
      round_trip ? (0.022 * distance * 2) : (0.022 * distance)
    when 'metro'
      round_trip ? (0.025 * distance * 2) : (0.025 * distance)
    when 'train'
      round_trip ? (0.02525 * distance * 2) : (0.02525 * distance)
    end
  end

  def create_emission
    Emission.create!(user_id: user.id, emissionable: self, amount: emitted_carbon.round(2))
  end
end
