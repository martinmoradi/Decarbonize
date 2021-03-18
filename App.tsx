
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import React, { createContext, useReducer } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationNavigator } from './src/Authentication';
import LoadAssets from './src/components/LoadAssets';
import { AppRoutesParamsList } from './src/components/Navigation';
import { ThemeProvider } from './src/components/Theme';
import { HomeNavigator } from './src/Home';

const AppStack = createStackNavigator<AppRoutesParamsList>();

interface stateType {
  isAuthenticated: boolean;
  user: {} | null;
  token: string | null;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: stateType = {
  isAuthenticated: false,
  user: null,
  token: null,
  errorMessage: null,
  isLoading: false,
};

export const AuthContext = createContext(initialState);

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      AsyncStorage.setItem('user', JSON.stringify(action.payload.data));
      AsyncStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        errorMessage: action.payload,
      };
    case 'LOGOUT':
      AsyncStorage.removeItem('user');
      AsyncStorage.removeItem('token');
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <ThemeProvider>
        <LoadAssets {...{ fonts }}>
          <SafeAreaProvider>
            {!(state.isAuthenticated && AsyncStorage.getItem('token') )? (
              <AppStack.Navigator headerMode="none" >
                <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
              </AppStack.Navigator>
            ) : (
              <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={HomeNavigator} />
              </AppStack.Navigator>
            )}
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
