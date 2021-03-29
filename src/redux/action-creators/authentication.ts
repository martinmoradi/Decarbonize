import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { headers } from '../../tools/api';
import { AuthAction, EmissionsAction, MealsAction, TripAction } from '../actions';
import {
  AuthActionType,
  EmissionsActionType,
  MealActionType,
  TripActionType,
  UserParamsType,
} from '../types';

export const signup = (signupParams: UserParamsType) => {
  const { email, password, passwordConfirmation, remember } = signupParams;
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.SIGNUP_ATTEMPT,
    });
    try {
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/signup`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
          user: { email, password, password_confirmation: passwordConfirmation },
        }),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      const token = response.headers.get('Authorization');
      if (remember && token) {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.setItem('token', token);
      }
      dispatch({
        type: AuthActionType.SIGNUP_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: AuthActionType.SIGNUP_ERROR,
        payload: err.message,
      });
    }
  };
};

export const login = (loginParams: UserParamsType) => {
  const { email, password, remember } = loginParams;
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.LOGIN_ATTEMPT,
    });
    try {
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/login`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ user: { email, password } }),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      const token = response.headers.get('Authorization');
      if (remember && token) {
        await AsyncStorage.setItem('token', token);
      }
      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: AuthActionType.LOGIN_ERROR,
        payload: err.message,
      });
    }
  };
};

export const loadUser = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.LOAD_USER_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/login`, {
        method: 'POST',
        headers: headers(token),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: AuthActionType.LOAD_USER_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: AuthActionType.LOAD_USER_ERROR,
        payload: err.message,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction | EmissionsAction | MealsAction | TripAction>) => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: EmissionsActionType.EMISSIONS_RESET,
    }),
      dispatch({
        type: MealActionType.MEALS_RESET,
      }),
      dispatch({
        type: TripActionType.TRIPS_RESET,
      }),
      dispatch({
        type: AuthActionType.LOGOUT,
      });
  };
};

export const deleteUser = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.DELETE_USER_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/signup`, {
        method: 'DELETE',
        headers: headers(token),
      });
      const { message, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: AuthActionType.DELETE_USER_SUCCESS,
        payload: message,
      });
    } catch (err) {
      dispatch({
        type: AuthActionType.DELETE_USER_ERROR,
        payload: err.message,
      });
    }
  };
};

export const deleteAccount = () => {};
