require 'faker'

User.create!(email: 'toto@toto.fr', password: '123456', created_at: Time.new(2019))
puts 'Toto has created his account successfully !'

FixedEmission.create!(
  user_id: 1,
  house_surface: 50,
  electricity_consumption: 50,
  gas_consumption: 0,
  wood_consumption: 0,
  wood_type: 'wood_logs',
  roommates: 1,
  clothes: 40,
  furnitures: 40,
  others: 100,
  breakfasts_per_week: 5,
  red_meats_per_week: 4,
  white_meats_per_week: 7,
  vegan_per_week: 0,
  vegetarian_per_week: 3,
)
puts 'Toto has completed the onboarding successfully !'

200.times do
  road_trip =
    RoadTrip.create(
      vehicle_type: 'diesel_car',
      user_id: 1,
      distance: Faker::Number.between(from: 5, to: 250),
      round_trip: Faker::Boolean.boolean(true_ratio: 0.7),
      created_at: Faker::Date.between(from: '2019-01-01', to: '2021-03-19'),
    )
  Emission.create!(
    amount: road_trip.emitted_carbon,
    emissionable: road_trip,
    user_id: 1,
    created_at: road_trip.created_at,
  )
end
puts '200 road trips successfully added to Toto'

20.times do
  air_trip =
    AirTrip.create(
      user_id: 1,
      round_trip: true,
      departure: Faker::Address.city,
      arrival: Faker::Address.city,
      departure_latitude: Faker::Address.latitude,
      departure_longitude: Faker::Address.longitude,
      arrival_latitude: Faker::Address.latitude,
      arrival_longitude: Faker::Address.longitude,
    )
end
puts '20 air trips successfully added to Toto'
