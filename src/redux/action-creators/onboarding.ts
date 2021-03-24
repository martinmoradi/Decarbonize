import { Dispatch } from 'redux';
import {
  OnboardingFoodActionType,
  OnboardingSpendingActionType,
  OnboardingEnergyActionType,
  OnboardingFoodStateType,
  OnboardingEnergyStateType,
  OnboardingSpendingStateType,
} from '../types';
import { OnboardingAction } from '../actions';

export const changeEnergyForm = (field: keyof OnboardingEnergyStateType, value) => {
  return (dispatch: Dispatch<OnboardingAction>) => {
    switch (field) {
      case 'people':
        return dispatch({
          type: OnboardingEnergyActionType.SET_PEOPLE,
          payload: value,
        });

      case 'surface':
        return dispatch({
          type: OnboardingEnergyActionType.SET_SURFACE,
          payload: value,
        });
      case 'electricity':
        return dispatch({
          type: OnboardingEnergyActionType.SET_ELECTRICITY,
          payload: value,
        });
      case 'gas':
        return dispatch({
          type: OnboardingEnergyActionType.SET_GAS, 
          payload: value,
        });
      case 'wood':
        return dispatch({
          type: OnboardingEnergyActionType.SET_WOOD,
          payload: value,
        });
      case 'woodType':
        return dispatch({
          type: OnboardingEnergyActionType.SET_WOOD_TYPE,
          payload: value,
        });

      case 'fuel':
        return dispatch({
          type: OnboardingEnergyActionType.SET_FUEL,
          payload: value,
        });
      case 'gasHeating':
        return dispatch({
          type: OnboardingEnergyActionType.SET_GAS_HEATING,
          payload: value,
        });
      case 'woodHeating':
        return dispatch({
          type: OnboardingEnergyActionType.SET_WOOD_HEATING,
          payload: value,
        });
      case 'fuelHeating':
        return dispatch({
          type: OnboardingEnergyActionType.SET_FUEL_HEATING,
          payload: value,
        });
      default:
        return;
    }
  };
};

export const changeFoodForm = (field: keyof OnboardingFoodStateType, value) => {
  return (dispatch: Dispatch<OnboardingAction>) => {
    switch (field) {
      case 'breakfast':
        return dispatch({
          type: OnboardingFoodActionType.SET_BREAKFAST,
          payload: value,
        });
      case 'redMeat':
        return dispatch({
          type: OnboardingFoodActionType.SET_RED_MEAT,
          payload: value,
        });
      case 'whiteMeat':
        return dispatch({
          type: OnboardingFoodActionType.SET_WHITE_MEAT,
          payload: value,
        });

      case 'vegan':
        return dispatch({
          type: OnboardingFoodActionType.SET_VEGAN,
          payload: value,
        });

      case 'vegetarian':
        return dispatch({
          type: OnboardingFoodActionType.SET_VEGETARIAN,
          payload: value,
        });

      default:
        return;
    }
  };
};

export const changeSpendingForm = (field: keyof OnboardingSpendingStateType, value) => {
  return (dispatch: Dispatch<OnboardingAction>) => {
    switch (field) {
      case 'furniture':
        return dispatch({
          type: OnboardingSpendingActionType.SET_FURNITURE,
          payload: value,
        });
      case 'hobbies':
        return dispatch({
          type: OnboardingSpendingActionType.SET_HOBBIES,
          payload: value,
        });
      case 'clothes':
        return dispatch({
          type: OnboardingSpendingActionType.SET_CLOTHES,
          payload: value,
        });
      default:
        return;
    }
  };
};
