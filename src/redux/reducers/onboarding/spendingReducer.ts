import { OnboardingSpendingStateType } from '../../types';
import { OnboardingAction } from '../../actions';
import { OnboardingSpendingActionType } from '../../types';

const initialState: OnboardingSpendingStateType = {
  clothes: 0,
  furniture: 0,
  hobbies: 0,
};

const spendingReducer = (
  state = initialState,
  action: OnboardingAction
): OnboardingSpendingStateType => {
  switch (action.type) {
    case OnboardingSpendingActionType.SET_CLOTHES:
      return {
        ...state,
        clothes: action.payload,
      }
      case OnboardingSpendingActionType.SET_FURNITURE:
      return {
        ...state,
        furniture: action.payload,
      }
      case OnboardingSpendingActionType.SET_HOBBIES:
      return {
        ...state,
        hobbies: action.payload,
      }
    default:
    return state;
  } 
};

export default spendingReducer;
