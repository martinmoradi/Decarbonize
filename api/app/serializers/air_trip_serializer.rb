class AirTripSerializer
  # TAKES USER AS ARG
  include JSONAPI::Serializer

  attribute :emitted_carbon do |object|
    object.air_trips.last.emitted_carbon
  end

  attribute :created_at do |object|
    object.air_trips.last.created_at
  end

  attribute :departure do |object|
    object.air_trips.last.departure
  end

  attribute :arrival do |object|
    object.air_trips.last.arrival
  end

  attribute :round_trip do |object|
    object.air_trips.last.round_trip
  end

end
