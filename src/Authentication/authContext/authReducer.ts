import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, authActionType, authStateType } from './authTypes';

export const initialState: authStateType = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null,
  isLoading: false,
};

const authReducer = (state: authStateType = initialState, action: Action) => {
  switch (action.type) {
    case authActionType.LOGIN_ATTEMPT:
    case authActionType.SIGNUP_ATTEMPT:
      return {
        isAuthenticated: true,
        user: null,
        token: null,
        errorMessage: null,
        isLoading: true,
      };
    case authActionType.SIGNUP_SUCCESS:
    case authActionType.LOGIN_SUCCESS:
      if (action.payload.remember) {
        AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
        AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
      }
      return {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
      };
    case authActionType.SIGNUP_ERROR:
    case authActionType.LOGIN_ERROR:
      console.error(action.payload);
      AsyncStorage.removeItem('user');
      AsyncStorage.removeItem('token');
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        errorMessage: action.payload,
      };
    case authActionType.LOGOUT:
      AsyncStorage.removeItem('user');
      AsyncStorage.removeItem('token');
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        errorMessage: null,
      };
    default:
      console.error('ERROR ACTION TYPE NOT HANDLED');
      return state;
  }
};

export default authReducer;
