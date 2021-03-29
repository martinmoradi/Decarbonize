import { AuthAction } from '../actions';
import { AuthActionType, UserType } from '../types';

interface AuthStateType {
  user: UserType | null;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: AuthStateType = {
  user: null,
  errorMessage: null,
  isLoading: false,
};

const authReducer = (state = initialState, action: AuthAction): AuthStateType => {
  switch (action.type) {
    case AuthActionType.LOAD_USER_ATTEMPT:
      return {
        user: null,
        errorMessage: null,
        isLoading: false,
      };
    case AuthActionType.LOGIN_ATTEMPT:
    case AuthActionType.SIGNUP_ATTEMPT:
      return {
        user: null,
        errorMessage: null,
        isLoading: true,
      };
    case AuthActionType.LOAD_USER_SUCCESS:
    case AuthActionType.SIGNUP_SUCCESS:
    case AuthActionType.LOGIN_SUCCESS:
      return {
        user: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case AuthActionType.SIGNUP_ERROR:
    case AuthActionType.LOGIN_ERROR:
      return {
        user: null,
        errorMessage: action.payload,
        isLoading: false,
      };
    case AuthActionType.LOAD_USER_ERROR:
    case AuthActionType.LOGOUT:
      return {
        user: null,
        errorMessage: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
