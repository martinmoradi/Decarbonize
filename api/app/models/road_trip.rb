#  Schema.rb
#  t.string "vehicle_type"
#  t.integer "distance"
#  t.boolean "round_trip"

class RoadTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  belongs_to :user
  has_many :regular_trips
  after_create :create_emission
  
  attribute :amount

  def amount
    emission.amount
  end



  # Per trip in kgs

  def emitted_carbon
    case vehicle_type
    when 'electric_car'
      round_trip ? (0.0198 * distance * 2) : (0.0198 * distance)
    when 'diesel_car'
      round_trip ? (0.157 * distance * 2) : (0.157 * distance)
    when 'petrol_car'
      round_trip ? (0.1649 * distance * 2) : (0.1649 * distance)
    when 'bus'
      round_trip ? (0.104 * distance * 2) : (0.104 * distance)
    when 'tramway'
      round_trip ? (0.022 * distance * 2) : (0.022 * distance)
    when 'metro'
      round_trip ? (0.025 * distance * 2) : (0.025 * distance)
    end
  end

  def create_emission
    Emission.create!(user_id: self.user.id, emissionable: self, amount: self.emitted_carbon)
  end
end
