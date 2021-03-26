import { TripActionType, TripType } from '../types';
import { TripAction } from '../actions';

interface TripStateType {
  data: TripType;
  errorMessage: string | null;
  isLoading: boolean;
  isTripsEmpty: boolean;
}

const initialState: TripStateType = {
  data: {
    land_trips: [
      {
        amount: 0,
        created_at: '',
        updated_at: '',
        distance: 0,
        id: 0,
        user_id: 0,
        round_trip: false,
        vehicle_type: '',
      },
    ],
    air_trips: [
      {
        amount: 0,
        created_at: '',
        updated_at: '',
        distance: 0,
        id: 0,
        user_id: 0,
        round_trip: false,
        departure: '',
        arrival: '',
        arrival_latitude: 0,
        arrival_longitude: 0,
        departure_latitude: 0,
        departure_longitude: 0,
      },
    ],
  },
  errorMessage: null,
  isLoading: false,
  isTripsEmpty: true,
};

const tripsReducer = (state = initialState, action: TripAction): TripStateType => {
  switch (action.type) {
    case TripActionType.FETCH_TRIPS_ATTEMPT:
    case TripActionType.POST_TRIP_ATTEMPT:
      return {
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
        isTripsEmpty: true,
      };
    case TripActionType.FETCH_TRIPS_SUCCESS:
    case TripActionType.POST_TRIP_SUCCESS:
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
        isTripsEmpty: false,
      };
    case TripActionType.FETCH_TRIPS_ERROR:
    case TripActionType.POST_TRIP_ERROR:
      return {
        data: initialState.data,
        errorMessage: action.payload,
        isLoading: false,
        isTripsEmpty: true,
      };
    default:
      return state;
  }
};

export default tripsReducer;
