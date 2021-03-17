import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, authStateType } from './authTypes';

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null,
  isLoading: false,
};

export const authReducer = (state: authStateType = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        isAuthenticated: true,
        user: null,
        token: null,
        errorMessage: null,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
      AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        errorMessage: action.payload,
      };
    case 'LOGOUT':
      AsyncStorage.removeItem('user');
      AsyncStorage.removeItem('token');
      return {
        ...initialState,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};
