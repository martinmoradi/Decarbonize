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
    default:
      return state;
  }
};

export default foodReducer;
