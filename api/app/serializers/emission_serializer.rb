class EmissionSerializer
  # THIS TAKES AN USER OBJECT AS ARG

  include JSONAPI::Serializer
  attributes :weekly_total,
             :monthly_total,
             :yearly_total,
             :weekly_landtrip_emissions,
             :monthly_landtrip_emissions,
             :yearly_landtrip_emissions,
             :weekly_airtrip_emissions,
             :monthly_airtrip_emissions,
             :yearly_airtrip_emissions,
             :weekly_travel_emissions,
             :monthly_travel_emissions,
             :yearly_travel_emissions,
             :total_car_emissions,
             :total_bus_emissions,
             :total_tramway_emissions,
             :total_metro_emissions,
             :total_train_emissions,
             :total_meals_emissions,
             :total_red_meat_emissions,
             :total_white_meat_emissions,
             :total_vegetarian_emissions,
             :total_vegan_emissions

  attribute :weekly_alimentation do |object|
    object.fixed_emission.weekly_alimentation
  end

  attribute :monthly_alimentation do |object|
    object.fixed_emission.alimentation
  end

  attribute :yearly_alimentation do |object|
    object.fixed_emission.yearly_alimentation
  end

  attribute :weekly_housing do |object|
    object.fixed_emission.weekly_housing
  end

  attribute :monthly_housing do |object|
    object.fixed_emission.housing
  end

  attribute :yearly_housing do |object|
    object.fixed_emission.yearly_housing
  end

  attribute :weekly_spendings do |object|
    object.fixed_emission.weekly_spendings
  end

  attribute :monthly_spendings do |object|
    object.fixed_emission.spendings
  end

  attribute :yearly_spendings do |object|
    object.fixed_emission.yearly_spendings
  end

  attribute :appliances do |object|
    object.user_commitments.where(commitment_id: 1).exists?
  end

  attribute :reduced_heating do |object|
    object.user_commitments.where(commitment_id: 2).exists?
  end

  attribute :eco_driving do |object|
    object.user_commitments.where(commitment_id: 3).exists?
  end

  attribute :tap_water do |object|
    object.user_commitments.where(commitment_id: 4).exists?
  end

  attribute :food_wastes do |object|
    object.user_commitments.where(commitment_id: 5).exists?
  end

  attribute :bulk_food do |object|
    object.user_commitments.where(commitment_id: 6).exists?
  end

  attribute :zero_wastes do |object|
    object.user_commitments.where(commitment_id: 7).exists?
  end
end
