import { OnboardingFoodStateType } from '../../types';
import { OnboardingAction } from '../../actions';
import { OnboardingFoodActionType } from '../../types';

const initialState: OnboardingFoodStateType = {
  breakfasts_per_week: 0,
  red_meats_per_week: 0,
  white_meats_per_week: 0,
  vegan_per_week: 0,
  vegetarian_per_week: 0,
};

const foodReducer = (state = initialState, action: OnboardingAction): OnboardingFoodStateType => {
  switch (action.type) {
    case OnboardingFoodActionType.SET_BREAKFAST:
      return {
        ...state,
        breakfasts_per_week: action.payload,
      };
    case OnboardingFoodActionType.SET_RED_MEAT:
      return {
        ...state,
        red_meats_per_week: action.payload,
      };
    case OnboardingFoodActionType.SET_WHITE_MEAT:
      return {
        ...state,
        white_meats_per_week: action.payload,
      };
    case OnboardingFoodActionType.SET_VEGAN:
      return {
        ...state,
        vegan_per_week: action.payload,
      };
    case OnboardingFoodActionType.SET_VEGETARIAN:
      return {
        ...state,
        vegetarian_per_week: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
