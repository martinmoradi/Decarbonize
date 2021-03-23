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

export type TripAction =
  | PostTripAttempt
  | PostTripSuccess
  | PostTripError
