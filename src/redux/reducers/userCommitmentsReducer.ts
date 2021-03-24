import { UserCommitmentsActionType, UserCommitmentsType } from '../types';
import { UserCommitmentsAction } from '../actions';

interface UserCommitmentsStateType {
  data: UserCommitmentsType;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: UserCommitmentsStateType = {
  data: {
    appliances: false,
    reduced_heating: false,
    eco_driving: false,
    tap_water: false,
    food_wastes: false,
    bulk_food: false,
    zero_wastes: false,
  },
  errorMessage: null,
  isLoading: false,
};

const userCommitmentsReducer = (state = initialState, action: UserCommitmentsAction): UserCommitmentsStateType => {
  switch (action.type) {
    case UserCommitmentsActionType.POST_USER_COMMITMENTS_ATTEMPT:
      return { 
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
      }

      case UserCommitmentsActionType.POST_USER_COMMITMENTS_SUCCESS:
        return {
          data: action.payload,
          errorMessage: null,
          isLoading: false,
        }

        case UserCommitmentsActionType.POST_USER_COMMITMENTS_ERROR:
          return {
            data: initialState.data,
            errorMessage: action.payload,
            isLoading: false,
          }

          default:
            return state;
  }
}

export default userCommitmentsReducer;