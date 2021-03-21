import { AuthActionType } from '../action-types';

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

interface LoadUser {
  type: AuthActionType.LOAD_USER;
}

export type AuthAction =
  | LoginAttempt
  | LoginSuccess
  | LoginError
  | Logout
  | SignUpAttempt
  | SignUpSuccess
  | SignUpError
  | LoadUser;
