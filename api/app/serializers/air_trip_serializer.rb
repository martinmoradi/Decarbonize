class AirTripSerializer
  include JSONAPI::Serializer
  attributes :round_trip, :departure_latitude, :departure, :arrival, :departure_longitude,  :arrival_latitude, :arrival_longitude

  attribute :emmited_carbon do |object|
    object.air_trip.emmited_carbon
  end

  attribute :created_at do |object|
    object.air_trip.created_at
  end

end
