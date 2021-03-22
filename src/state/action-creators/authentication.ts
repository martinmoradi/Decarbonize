import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthActionType, UserParamsType } from '../types';
import { AuthAction } from '../actions';
import { headers } from '../../tools/api';

export const signup = (signupParams: UserParamsType) => {
  const { email, password, passwordConfirmation, remember } = signupParams;
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionType.SIGNUP_ATTEMPT,
    });
    try {
      const response = await fetch(`http://127.0.0.1:3000/signup`, {
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
      const response = await fetch(`http://127.0.0.1:3000/login`, {
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
      const response = await fetch(`http://127.0.0.1:3000/login`, {
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
  return async (dispatch: Dispatch<AuthAction>) => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: AuthActionType.LOGOUT,
    });
  };
};

export const deleteAccount = () => {};
