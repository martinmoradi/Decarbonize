export interface userPropsType {
  email: string;
  password: string;
  passwordConfirmation?: string;
  remember: boolean;
}

export interface quizPropsType {
  breakfasts_per_week: number;
  clothes: number;
  electricity_consumption: number;
  fuel_consumption: number;
  furnitures: number;
  gas_consumption: number;
  house_surface: number;
  others: number;
  red_meats_per_week: number;
  roommates: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
  white_meats_per_week: number;
  wood_consumption: number;
  wood_type: string;
}

export enum authActionType {
  LOGIN_ATTEMPT = 'login_attempt',
  LOGIN_SUCCESS = 'login_success',
  LOGIN_ERROR = 'login_error',
  LOGOUT = 'logout',
  SIGNUP_ATTEMPT = 'signup_attempt',
  SIGNUP_SUCCESS = 'signup_success',
  SIGNUP_ERROR = 'signup_error',
}

interface LoginAttempt {
  type: authActionType.LOGIN_ATTEMPT;
}

interface LoginSuccess {
  type: authActionType.LOGIN_SUCCESS;
  payload: {
    user: {
      email: string;
      id: number;
    };
  };
}

interface LoginError {
  type: authActionType.LOGIN_ERROR;
  payload: string;
}

interface SignUpAttempt {
  type: authActionType.SIGNUP_ATTEMPT;
}

interface SignUpSuccess {
  type: authActionType.SIGNUP_SUCCESS;
  payload: {
    user: {
      email: string;
      id: number;
    };
  };
}

interface SignUpError {
  type: authActionType.SIGNUP_ERROR;
  payload: string;
}

interface Logout {
  type: authActionType.LOGOUT;
}

export type Action =
  | LoginAttempt
  | LoginSuccess
  | LoginError
  | Logout
  | SignUpAttempt
  | SignUpSuccess
  | SignUpError;
