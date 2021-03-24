export enum TripActionType {
    POST_TRIP_ATTEMPT = 'post_trip_attempt',
    POST_TRIP_SUCCESS = 'post_trip_success',
    POST_TRIP_ERROR = 'post_trip_error',
    FETCH_TRIPS_ATTEMPT = 'fetch_trips_attempt',
    FETCH_TRIPS_SUCCESS = 'fetch_trips_success',
    FETCH_TRIPS_ERROR = 'fetch_trips_error',
  }

export interface TripType{
  land_trips: object[];
  air_trips: object[];
}


  