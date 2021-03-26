export enum TripActionType {
  POST_TRIP_ATTEMPT = 'post_trip_attempt',
  POST_TRIP_SUCCESS = 'post_trip_success',
  POST_TRIP_ERROR = 'post_trip_error',
  FETCH_TRIPS_ATTEMPT = 'fetch_trips_attempt',
  FETCH_TRIPS_SUCCESS = 'fetch_trips_success',
  FETCH_TRIPS_ERROR = 'fetch_trips_error',
  TRIPS_RESET = 'trips_reset',
}

export type SingleLandTrip = {
  amount: number;
  created_at: string;
  updated_at: string;
  distance: number;
  id: number;
  user_id: number;
  round_trip: boolean;
  vehicle_type: string;
};

export type SingleAirTrip = {
  amount: number;
  created_at: string;
  updated_at: string;
  distance: number;
  id: number;
  user_id: number;
  round_trip: boolean;
  departure: string;
  arrival: string;
  arrival_latitude: number;
  arrival_longitude: number;
  departure_latitude: number;
  departure_longitude: number;
};

export interface TripType {
  land_trips: SingleLandTrip[];
  air_trips: SingleAirTrip[];
}
