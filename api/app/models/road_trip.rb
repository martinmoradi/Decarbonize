class RoadTrip < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy
  after_create :create_emission

  def emitted_carbon
    distance * 2
  end

  def calc_emission
    case vehicle_type
      when "electric car"
        return round_trip ? (19.8 * distance * 2) : (19.8 * distance)
      when "diesel car"
        return round_trip ? ( 156.56 * distance * 2) : ( 156.56 * distance)
      when "petrol car"
        return round_trip ? ( 164.86 * distance * 2) : ( 164.86 * distance)
      when "bus"
           return round_trip ? (104 * distance * 2) : (104 * distance)
      when "tramway"
        return round_trip ? ( 2.2 * distance * 2) : ( 2.2 * distance)
      when "metro"
        return round_trip ? ( 2.5 * distance * 2) : ( 2.5 * distance)
    end

  end
end
