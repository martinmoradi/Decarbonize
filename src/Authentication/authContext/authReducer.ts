import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState } from './AuthProvider';
import { Action, authActionType, authStateType } from './authTypes';

const authReducer = async (state: authStateType = initialState, action: Action) => {
  switch (action.type) {
    case authActionType.LOGIN_ATTEMPT:
      return {
        ...state,
        isAuthenticated: true,
        user: null,
        token: null,
        errorMessage: null,
        isLoading: true,
      };
    case authActionType.LOGIN_SUCCESS:
      if (action.payload.remember) {
        await AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
        await AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
      }
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
      };
    case authActionType.LOGIN_ERROR:
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
    case authActionType.LOGOUT:
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
      console.error(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export default authReducer;
