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

  # All Values are exprimed Monthly and return kgCo2

  # COMMITMENTS CHECKS

  def appliances
    user.user_commitments.where(commitment_id: 1).exists? ? (-6.2 / 12.0) : 0
  end

  def reduced_heating
    user.user_commitments.where(commitment_id: 2).exists? ? (-201.6 / 12.0) : 0
  end

  def tap_water
    user.user_commitments.where(commitment_id: 4).exists? ? (-215.0 / 12.0) : 0
  end

  def food_wastes
    user.user_commitments.where(commitment_id: 5).exists? ? (-31.0 / 12.0) : 0
  end

  def bulk_food
    user.user_commitments.where(commitment_id: 6).exists? ? (-35.0 / 12.0) : 0
  end

  def zero_wastes
    user.user_commitments.where(commitment_id: 7).exists? ? -707.67 : 0
  end

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

  def weekly_housing
    (housing / 4.33).round(2)
  end

  def housing
    (
      (
        (house_surface * 17.5) + (elec_kwh * 0.06) + (gas_consumption * 0.23) +
          (fuel_consumption * 0.324) + wood_emissions + appliances + reduced_heating
      ) / roommates.to_f
    ).round(2)
  end

  def yearly_housing
    (housing * 12).round(2)
  end

  # SPENDINGS

  def weekly_spendings
    (spendings / 4.33).round(2)
  end

  def spendings
    clothes * 0.5 + furnitures + others * 0.055
  end

  def yearly_spendings
    spendings * 12
  end

  # ALIMENTATION

  def breakfast
    breakfasts_per_week * 4.33 * 0.37
  end

  def drinks_and_garbage
    (241.25 + 707.67 + zero_wastes) / 12.0
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

  def weekly_alimentation
    (
      breakfasts_per_week * 0.37 + white_meats_per_week * 1.35 + vegetarian_per_week * 0.51 +
        vegan_per_week * 0.3939
    ).round(2)
  end

  def alimentation
    (
      breakfast + red_meat + white_meat + vegeterian + vegan + drinks_and_garbage + tap_water +
        food_wastes + bulk_food
    ).round(2)
  end

  def yearly_alimentation
    (alimentation * 12).round(2)
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
