import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { EmissionsAction } from '../actions';
import { EmissionsActionType } from '../types';
import { OnboardingDataType } from '../../Authentication/onboardingTypes';

const renameKeys = (energy, food, spending) => {
 const fixed_emissions = {...food, ...energy, ...spending}
  fixed_emissions.house_surface = fixed_emissions.surface
  fixed_emissions.wood_type = fixed_emissions.woodType
  fixed_emissions.
} 

export const postForm = (energy, food, spending) => {
 
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.POST_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions`,
        {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify({ fixed_emission: { ...energy, ...food, ...spending } }),
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
      console.log(err.message);

      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const putEmissions = (onboardingData: OnboardingDataType) => {
  return async (dispatch: Dispatch<EmissionsAction>) => {
    dispatch({
      type: EmissionsActionType.POST_EMISSIONS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/fixed_emissions`,
        {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify({ fixed_emission: { ...onboardingData } }),
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
