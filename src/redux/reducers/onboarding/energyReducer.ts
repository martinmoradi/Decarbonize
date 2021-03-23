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
  isGasHeating: false,
  isWoodHeating: false,
  isFuelHeating: false,
};

const energyReducer = (
  state = initialState,
  action: OnboardingAction
): OnboardingEnergyStateType => {
switch (action.type) {
  case OnboardingEnergyActionType.SET_PEOPLE:
  return {
    ...state,
    people: action.payload,
  }
  case OnboardingEnergyActionType.SET_SURFACE:
  return {
    ...state,
    surface: action.payload,
  }
  case OnboardingEnergyActionType.SET_ELECTRICITY:
  return {
    ...state,
    electricity: action.payload,
  }
  case OnboardingEnergyActionType.SET_GAS:
  return {
    ...state,
    gas: action.payload,
  }
  case OnboardingEnergyActionType.SET_WOOD_TYPE:
  return {
    ...state,
    woodType: action.payload,
  }
  case OnboardingEnergyActionType.SET_WOOD:
  return {
    ...state,
    wood: action.payload,
  }
  case OnboardingEnergyActionType.SET_FUEL:
  return {
    ...state,
    fuel: action.payload,
  }
  case OnboardingEnergyActionType.SET_IS_WOOD_HEATING:
  return {
    ...state,
    isWoodHeating: action.payload,
  }
  case OnboardingEnergyActionType.SET_IS_GAS_HEATING:
  return {
    ...state,
    isGasHeating: action.payload,
  }
  case OnboardingEnergyActionType.SET_IS_FUEL_HEATING:
  return {
    ...state,
    isFuelHeating: action.payload,
  }
  default:
    return state;
}
  
};

export default energyReducer;
