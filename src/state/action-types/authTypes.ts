export enum AuthActionType {
  LOGIN_ATTEMPT = 'login_attempt',
  LOGIN_SUCCESS = 'login_success',
  LOGIN_ERROR = 'login_error',
  LOGOUT = 'logout',
  SIGNUP_ATTEMPT = 'signup_attempt',
  SIGNUP_SUCCESS = 'signup_success',
  SIGNUP_ERROR = 'signup_error',
  LOAD_USER = 'load_user',
}

export interface UserParamsType {
  email: string;
  password: string;
  passwordConfirmation?: string;
  remember: boolean;
}
