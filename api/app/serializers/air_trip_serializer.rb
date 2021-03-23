class AirTripSerializer
  include JSONAPI::Serializer

  attribute :emmited_carbon do |object|
    object.air_trip.emmited_carbon
  end

  attribute :created_at do |object|
    object.air_trip.created_at
  end

  attribute :departure do |object|
    object.air_trip.departure
  end

  attribute :arrival do |object|
    object.air_trip.arrival
  end

  attribute :round_trip do |object|
    object.air_trip.round_trip
  end

end
