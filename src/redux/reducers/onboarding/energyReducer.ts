import { OnboardingEnergyStateType } from '../../types';
import { OnboardingAction } from '../../actions';
import { OnboardingEnergyActionType } from '../../types';

const initialState: OnboardingEnergyStateType = {
  people: 1,
  surface: 10,
  electricity: 0,
  gas: 0,
  woodType: 'wood_logs',
  wood: 0,
  fuel: 0,
  gasHeating: false,
  woodHeating: false,
  fuelHeating: false,
};

const energyReducer = (
  state = initialState,
  action: OnboardingAction
): OnboardingEnergyStateType => {
  return { ...state };
};

export default energyReducer;
