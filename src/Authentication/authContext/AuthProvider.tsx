import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';
import { authStateType } from './authTypes';


export const initialState: authStateType = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null,
  isLoading: false,
};

export const AuthContext = createContext<{ state: authStateType; dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
