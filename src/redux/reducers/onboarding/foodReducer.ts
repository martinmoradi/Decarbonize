import { OnboardingFoodStateType } from '../../types';
import { OnboardingAction } from '../../actions';
import { OnboardingFoodActionType } from '../../types';

const initialState: OnboardingFoodStateType = {
  breakfast: 0,
  redMeat: 0,
  whiteMeat: 0,
  vegan: 0,
  vegetarian: 0,
};

const foodReducer = (state = initialState, action: OnboardingAction): OnboardingFoodStateType => {
  switch (action.type) {
    case OnboardingFoodActionType.SET_BREAKFAST:
      return {
        ...state,
        breakfast: action.payload,
      };
      case OnboardingFoodActionType.SET_RED_MEAT:
      return {
        ...state,
        redMeat: action.payload,
      };
      case OnboardingFoodActionType.SET_WHITE_MEAT:
      return {
        ...state,
        whiteMeat: action.payload,
      };
      case OnboardingFoodActionType.SET_VEGAN:
      return {
        ...state,
        vegan: action.payload,
      };
      case OnboardingFoodActionType.SET_VEGETARIAN:
      return {
        ...state,
        vegetarian: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
