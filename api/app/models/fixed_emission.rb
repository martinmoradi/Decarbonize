 # Schema.rb
 # t.bigint "user_id", null: false
  #   t.float "house_surface"
  #   t.float "electricity_consumption"
  #   t.float "gas_consumption"
  #   t.float "wood_consumption"
  #   t.string "wood_type"
  #   t.float "fuel_consumption"
  #   t.integer "roommates"
  #   t.float "clothes"
  #   t.float "furnitures"
  #   t.float "others"
  #   t.integer "breakfasts_per_week"
  #   t.integer "red_meats_per_week"
  #   t.integer "vegan_per_week"
  #   t.integer "vegetarian_per_week"
  #   t.integer "white_meats_per_week"

class FixedEmission < ApplicationRecord
  has_one :emission, as: :emissionable, dependent: :destroy

#   TODO 
#  Quand on aura engagements -> 
#  Si user.engagments.zero_garbage -> Retirer 707.67 par an 

  # MONTHLY EMISSIONS 

  ####### HOUSING AND HEATING ####################
  
  def wood_factor 
    wood_type == "wood_logs" ? 0.0295 : 0.0304
  end
  
  def calc_wood_kwh
    case wood_type 
    when "wood_logs"
      wood_consumption * 0.04
    when "wood_pellets"
      wood_consumption * 0.065
    end
  end
  
  def housing # RETURN KG CO2 PER MONTH
    ((house_surface * 17.5) + (electricity_consumption * 0.06) + (gas_consumption * 0.23) + (fuel_consumption * 0.324) + ( self.calc_wood_kwh * self.wood_factor)) / roommates.to_f
  end

  ######## SPENDINGS #########
  
  def spendings # RETURN KG CO2  PER MONTH
    clothes * 0.5 + furnitures + others * 0.055
  end
  
  ###### ALIMENTATION ###############

  def breakfast # RETURN KG C02 PER MONTH
    breakfasts_per_week * 4.33 * 0.37
  end
  
  @drinks_and_garbage = (241.25 + 707.67) / 12.0

  def red_meat # RETURN KG C02 PER MONTH
    red_meats_per_week * 4.33 * 6.29
  end
  
  def white_meat # RETURN KG C02 PER MONTH
    white_meats_per_week * 4.33 * 1.35
  end

  def vegeterian # RETURN KG C02 PER MONTH
    vegetarian_per_week * 4.33 * 0.51
  end

  def vegan  # RETURN KG C02 PER MONTH
    vegan_per_week * 4.33 * 0.3939
  end
  
  def alimentation # RETURN KG C02 PER MONTH
    breakfast + red_meat + white_meat + vegeterian + vegan
  end


  ####### TOTAL MONTHLY ##########

  def monthly_emitted_carbon #KG CO2
    housing + spendings + alimentation
  end

end
