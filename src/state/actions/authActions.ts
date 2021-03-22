import { AuthActionType } from '../types';

export interface UserType {
  user: { id: number; email: string };
}
interface LoginAttempt {
  type: AuthActionType.LOGIN_ATTEMPT;
}

interface LoginSuccess {
  type: AuthActionType.LOGIN_SUCCESS;
  payload: UserType;
}

interface LoginError {
  type: AuthActionType.LOGIN_ERROR;
  payload: string;
}

interface SignUpAttempt {
  type: AuthActionType.SIGNUP_ATTEMPT;
}

interface SignUpSuccess {
  type: AuthActionType.SIGNUP_SUCCESS;
  payload: UserType;
}

interface SignUpError {
  type: AuthActionType.SIGNUP_ERROR;
  payload: string;
}

interface Logout {
  type: AuthActionType.LOGOUT;
}

interface LoadUserAttempt {
  type: AuthActionType.LOAD_USER_ATTEMPT;
}

interface LoadUserSuccess {
  type: AuthActionType.LOAD_USER_SUCCESS;
}

interface LoadUserError {
  type: AuthActionType.LOAD_USER_ERROR;
}

export type AuthAction =
  | LoginAttempt
  | LoginSuccess
  | LoginError
  | Logout
  | SignUpAttempt
  | SignUpSuccess
  | SignUpError
  | LoadUserAttempt
  | LoadUserSuccess
  | LoadUserError;
