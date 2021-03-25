import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { EmissionsAction } from '../actions';
import { EmissionsActionType } from '../types';
import { OnboardingType, SettingType } from '../types';

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

export const putEmissions = (settingData: SettingType) => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.PUT_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const fixed_emissions = {... settingData};
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions`,
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
      dispatch({
        type: EmissionsActionType.PUT_EMISSIONS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: EmissionsActionType.PUT_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};
