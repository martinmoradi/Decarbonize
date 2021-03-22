import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { EmissionsAction } from '../actions';
import { EmissionsActionType } from '../types';
import { IOnboardingDataType } from '../../Authentication/onboardingTypes';

export const postForm = (onboardingData: IOnboardingDataType) => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.POST_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(`http://127.0.0.1:3000/api/v1/fixed_emissions`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({ fixed_emission: { ...onboardingData } }),
      });
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

export const fetchEmissions = () => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.FETCH_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://decarbonize-perruches.herokuapp.com/api/v1/fixed_emissions`,
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
