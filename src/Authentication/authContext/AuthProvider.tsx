import React, { createContext, useReducer } from 'react';
import authReducer, { initialState } from './authReducer';
import { authStateType } from './authTypes';

export const AuthContext = createContext<{ state: authStateType; dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
