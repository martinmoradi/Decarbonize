class LandTripSerializer
    include JSONAPI::Serializer
    
  
    attribute :emitted_carbon do |object|
      object.land_trips.last.emitted_carbon
    end

    attribute :vehicle_type do |object|
        object.land_trips.last.vehicle_type
    end

    attribute :distance do |object|
        object.land_trips.last.distance
    end
  
    attribute :created_at do |object|
      object.land_trips.last.created_at
    end
  
    attribute :round_trip do |object|
      object.air_trips.last.round_trip
    end
  
  end