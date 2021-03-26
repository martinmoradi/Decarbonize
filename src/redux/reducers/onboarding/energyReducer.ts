import { OnboardingEnergyStateType } from '../../types';
import { OnboardingAction } from '../../actions';
import { OnboardingEnergyActionType } from '../../types';

const initialState: OnboardingEnergyStateType = {
  roommates: 1,
  house_surface: 10,
  electricity_consumption: 0,
  gas_consumption: 0,
  wood_type: 'wood_logs',
  wood_consumption: 0,
  fuel_consumption: 0,
  isGasHeating: false,
  isWoodHeating: false,
  isFuelHeating: false,
};

const energyReducer = (
  state = initialState,
  action: OnboardingAction
): OnboardingEnergyStateType => {
  switch (action.type) {
    case OnboardingEnergyActionType.SET_ROOMMATES:
      return {
        ...state,
        roommates: action.payload,
      };
    case OnboardingEnergyActionType.SET_HOUSE_SURFACE:
      return {
        ...state,
        house_surface: action.payload,
      };
    case OnboardingEnergyActionType.SET_ELECTRICITY_CONSUMPTION:
      return {
        ...state,
        electricity_consumption: action.payload,
      };
    case OnboardingEnergyActionType.SET_GAS_CONSUMPTION:
      return {
        ...state,
        gas_consumption: action.payload,
      };
    case OnboardingEnergyActionType.SET_WOOD_TYPE:
      return {
        ...state,
        wood_type: action.payload,
      };
    case OnboardingEnergyActionType.SET_WOOD_CONSUMPTION:
      return {
        ...state,
        wood_consumption: action.payload,
      };
    case OnboardingEnergyActionType.SET_FUEL_CONSUMPTION:
      return {
        ...state,
        fuel_consumption: action.payload,
      };
    case OnboardingEnergyActionType.SET_IS_WOOD_HEATING:
      return {
        ...state,
        isWoodHeating: action.payload,
      };
    case OnboardingEnergyActionType.SET_IS_GAS_HEATING:
      return {
        ...state,
        isGasHeating: action.payload,
      };
    case OnboardingEnergyActionType.SET_IS_FUEL_HEATING:
      return {
        ...state,
        isFuelHeating: action.payload,
      };
    default:
      return state;
  }
};

export default energyReducer;
