import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { headers } from '../../tools/api';
import { EmissionsAction, OnboardingAction } from '../actions';
import {
  EmissionsActionType,
  OnboardingEnergyActionType,
  OnboardingFoodActionType,
  OnboardingSpendingActionType,
  OnboardingType,
  SettingType,
} from '../types';

export const postForm = (onboardingState: OnboardingType) => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.POST_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const fixed_emissions = setupPayload(onboardingState);
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions`,
        {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify(fixed_emissions),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: EmissionsActionType.POST_EMISSIONS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: EmissionsActionType.POST_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};

const setupPayload = (onboardingState: OnboardingType) => {
  const fixed_emissions = { ...onboardingState };
  delete fixed_emissions.isGasHeating;
  delete fixed_emissions.isWoodHeating;
  delete fixed_emissions.isFuelHeating;
  return fixed_emissions;
};

export const fetchEmissions = () => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.FETCH_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions`,
        {
          method: 'GET',
          headers: headers(token),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const fetchFixedEmissions = () => {
  return async (dispatch: Dispatch<EmissionsAction | OnboardingAction>) => {
    dispatch({
      type: EmissionsActionType.FETCH_FIXED_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions/1`,
        {
          method: 'GET',
          headers: headers(token),
        }
      );
      const { data, error } = await response.json();

      if (!response.ok) {
        throw new Error(error);
      }
      // Energy
      dispatch({
        type: OnboardingEnergyActionType.SET_ROOMMATES,
        payload: data.roommates,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_HOUSE_SURFACE,
        payload: data.house_surface,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_ELECTRICITY_CONSUMPTION,
        payload: data.electricity_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_GAS_CONSUMPTION,
        payload: data.gas_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_WOOD_TYPE,
        payload: data.wood_type,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_WOOD_CONSUMPTION,
        payload: data.wood_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_FUEL_CONSUMPTION,
        payload: data.fuel_consumption,
      });

      // Food
      dispatch({
        type: OnboardingFoodActionType.SET_BREAKFAST,
        payload: data.breakfasts_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_RED_MEAT,
        payload: data.red_meats_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_WHITE_MEAT,
        payload: data.white_meats_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_VEGAN,
        payload: data.vegan_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_VEGETARIAN,
        payload: data.vegetarian_per_week,
      });

      // Spendings
      dispatch({
        type: OnboardingSpendingActionType.SET_CLOTHES,
        payload: data.clothes,
      });
      dispatch({
        type: OnboardingSpendingActionType.SET_FURNITURE,
        payload: data.furnitures,
      });
      dispatch({
        type: OnboardingSpendingActionType.SET_OTHERS,
        payload: data.others,
      });
    } catch (err) {
      dispatch({
        type: EmissionsActionType.FETCH_FIXED_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const putFixedEmissions = (settingData: SettingType) => {
  return async (dispatch: Dispatch<EmissionsAction | OnboardingAction>) => {
    dispatch({
      type: EmissionsActionType.PUT_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const fixed_emissions = { ...settingData };
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions/1`,
        {
          method: 'PUT',
          headers: headers(token),
          body: JSON.stringify(fixed_emissions),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      // Energy
      dispatch({
        type: OnboardingEnergyActionType.SET_ROOMMATES,
        payload: data.fixed_emission.roommates,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_HOUSE_SURFACE,
        payload: data.fixed_emission.house_surface,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_ELECTRICITY_CONSUMPTION,
        payload: data.fixed_emission.electricity_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_GAS_CONSUMPTION,
        payload: data.fixed_emission.gas_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_WOOD_TYPE,
        payload: data.fixed_emission.wood_type,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_WOOD_CONSUMPTION,
        payload: data.fixed_emission.wood_consumption,
      });
      dispatch({
        type: OnboardingEnergyActionType.SET_FUEL_CONSUMPTION,
        payload: data.fixed_emission.fuel_consumption,
      });

      // Food
      dispatch({
        type: OnboardingFoodActionType.SET_BREAKFAST,
        payload: data.fixed_emission.breakfasts_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_RED_MEAT,
        payload: data.fixed_emission.red_meats_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_WHITE_MEAT,
        payload: data.fixed_emission.white_meats_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_VEGAN,
        payload: data.fixed_emission.vegan_per_week,
      });
      dispatch({
        type: OnboardingFoodActionType.SET_VEGETARIAN,
        payload: data.fixed_emission.vegetarian_per_week,
      });

      // Spendings
      dispatch({
        type: OnboardingSpendingActionType.SET_CLOTHES,
        payload: data.fixed_emission.clothes,
      });
      dispatch({
        type: OnboardingSpendingActionType.SET_FURNITURE,
        payload: data.fixed_emission.furnitures,
      });
      dispatch({
        type: OnboardingSpendingActionType.SET_OTHERS,
        payload: data.fixed_emission.others,
      });

      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data.user_emissions,
      });
    } catch (err) {
      dispatch({
        type: EmissionsActionType.PUT_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};
