import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, authStateType } from './authTypes';

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null,
  isLoading: false,
};

export const authReducer = async (state: authStateType = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      console.log('login_attempt');
      return {
        ...state,
        isAuthenticated: true,
        user: null,
        token: null,
        errorMessage: null,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      console.log('login_success', action.payload);
      await AsyncStorage.setItem('user', JSON.stringify(action.payload.data));
      const asyncUser = await AsyncStorage.getItem('user');
      console.log('asyncUserBeforeStringify', asyncUser);
      // @ts-ignore
      const asyncUserParsed = await JSON.parse(asyncUser);
      console.log('asyncUserAfterStringify', asyncUserParsed);
      await AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
      };
    case 'LOGIN_ERROR':
      console.log(action.payload.errorMessage);
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
      return {
        ...initialState,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        token: null,
        errorMessage: action.payload,
      };
    case 'LOGOUT':
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
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
