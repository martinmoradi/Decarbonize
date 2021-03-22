export enum TripActionType {
    POST_TRIP_ATTEMPT = 'post_trip_attempt',
    POST_TRIP_SUCCESS = 'post_trip_success',
    POST_TRIP_ERROR = 'post_trip_error',
  }

  export interface TripType {
    vehicle_type: string;
    round_trip: boolean; 
    distance: number;
  }
  