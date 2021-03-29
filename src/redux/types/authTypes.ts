export enum AuthActionType {
  LOGIN_ATTEMPT = 'login_attempt',
  LOGIN_SUCCESS = 'login_success',
  LOGIN_ERROR = 'login_error',
  LOGOUT = 'logout',
  SIGNUP_ATTEMPT = 'signup_attempt',
  SIGNUP_SUCCESS = 'signup_success',
  SIGNUP_ERROR = 'signup_error',
  LOAD_USER_ATTEMPT = 'load_user_attempt',
  LOAD_USER_SUCCESS = 'load_user_success',
  LOAD_USER_ERROR = 'load_user_error',
  DELETE_USER_ATTEMPT = 'delete_user_attempt',
  DELETE_USER_SUCCESS = 'delete_user_success',
  DELETE_USER_ERROR = 'delete_user_error',
}

export interface UserParamsType {
  email: string;
  password: string;
  passwordConfirmation?: string;
  remember: boolean;
}

export interface UserType {
  id: number;
  email: string;
  has_completed_onboarding: boolean;
}
