export interface authStateType {
  isAuthenticated: boolean;
  user: {} | null;
  token: string | null;
  errorMessage: string | null;
  isLoading: boolean;
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
    token: string;
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
    token: string;
  };
}

interface SignUpError {
  type: authActionType.SIGNUP_ERROR;
  payload: string;
}

export type Action =
  | LoginAttempt
  | LoginSuccess
  | LoginError
  | Logout
  | SignUpAttempt
  | SignUpSuccess
  | SignUpError;
