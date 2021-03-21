class UserSerializer
  include JSONAPI::Serializer
  attributes :id,
             :email,
             :weekly_total,
             :monthly_total,
             :yearly_total,
             :weekly_landtrip_emissions,
             :monthly_landtrip_emissions,
             :yearly_landtrip_emissions,
             :weekly_airtrip_emissions,
             :monthly_airtrip_emissions,
             :yearly_airtrip_emissions

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
end
