import { createContext } from 'react';
import { initialState } from './authReducer';
import { authStateType } from './authTypes';

export const AuthContext = createContext<{ state: authStateType; dispatch: React.Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

