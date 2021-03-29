import { TripActionType, TripType } from '../types';

interface PostTripAttempt {
  type: TripActionType.POST_TRIP_ATTEMPT;
}

interface PostTripSuccess {
  type: TripActionType.POST_TRIP_SUCCESS;
  payload: TripType;
}

interface PostTripError {
  type: TripActionType.POST_TRIP_ERROR;
  payload: string;
}

interface FetchTripAttempt {
  type: TripActionType.FETCH_TRIPS_ATTEMPT;
}

interface FetchTripSuccess {
  type: TripActionType.FETCH_TRIPS_SUCCESS;
  payload: TripType;
}

interface FetchTripError {
  type: TripActionType.FETCH_TRIPS_ERROR;
  payload: string;
}

interface TripsReset {
  type: TripActionType.TRIPS_RESET;
}

export type TripAction =
  | PostTripAttempt
  | PostTripSuccess
  | PostTripError
  | FetchTripAttempt
  | FetchTripSuccess
  | FetchTripError
  | TripsReset;
