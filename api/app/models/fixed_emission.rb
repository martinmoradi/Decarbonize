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
  belongs_to :user

  #   TODO
  #  Quand on aura engagements ->
  #  Si user.engagments.zero_garbage -> Retirer 707.67 par an

  # All Values are exprimed Monthly and return kgCo2

  # HOUSING & HEATING

  def wood_emissions
    0 if wood_consumption.zero?
    wood_type == 'wood_logs' ? wood_consumption / 0.04 * 0.295 : wood_consumption / 0.065 * 0.0304
  end

  def gas_kwh
    gas_consumption / 0.084
  end

  def fuel_kwh
    fuel_consumption / 0.101
  end

  def elec_kwh
    electricity_consumption / 0.15
  end

  def housing
    (
      (house_surface * 17.5) + (elec_kwh * 0.06) + (gas_consumption * 0.23) +
        (fuel_consumption * 0.324) + wood_emissions
    ) / roommates.to_f
  end

  # SPENDINGS

  def spendings
    clothes * 0.5 + furnitures + others * 0.055
  end

  # ALIMENTATION

  def breakfast
    breakfasts_per_week * 4.33 * 0.37
  end

  def drinks_and_garbage
    (241.25 + 707.67) / 12.0
  end

  def red_meat
    red_meats_per_week * 4.33 * 6.29
  end

  def white_meat
    white_meats_per_week * 4.33 * 1.35
  end

  def vegeterian
    vegetarian_per_week * 4.33 * 0.51
  end

  def vegan
    vegan_per_week * 4.33 * 0.3939
  end

  def alimentation
    breakfast + red_meat + white_meat + vegeterian + vegan + drinks_and_garbage
  end

  # TOTALS

  def monthly_fixed_emissions
    (housing + spendings + alimentation).round(2)
  end

  def daily_fixed_emissions
    (monthly_fixed_emissions / 30.4167).round(2)
  end

  def yearly_fixed_emissions
    (monthly_fixed_emissions * 12).round(2)
  end

  def weekly_fixed_emissions
    (daily_fixed_emissions * 7).round(2)
  end
end
