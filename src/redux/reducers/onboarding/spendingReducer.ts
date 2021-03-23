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
  return { ...state };
};

export default spendingReducer;
