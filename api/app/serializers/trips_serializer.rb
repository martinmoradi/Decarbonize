class TripsSerializer
    # TAKES USER AS ARG
    include JSONAPI::Serializer
    has_many :land_trips, serializer: :land_trip
    has_many :air_trips, serializer: :air_trip
    
    # def land_trips 
    #     object.land_trips
    # end

    # def air_trips 
    #     object.air_trips
    # end

end
