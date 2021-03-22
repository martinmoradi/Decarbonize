import { TripActionType } from '../types';
import { TripAction } from '../actions';

interface TripStateType {
  data: Object;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: TripStateType = {
  data: {



    
  },
  errorMessage: null,
  isLoading: false,
};


const tripsReducer = (state = initialState, action: TripAction): TripStateType => {
  switch(action.type) {
    case TripActionType.POST_TRIP_ATTEMPT:
      return {
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
      };
    case TripActionType.POST_TRIP_SUCCESS:
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case TripActionType.POST_TRIP_ERROR:
      return {
        data: initialState.data,
        errorMessage: action.payload,
        isLoading: false,
      };
      default:
      return state;
  }
};

export default tripsReducer;
