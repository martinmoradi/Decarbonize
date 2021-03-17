import { createStackNavigator } from '@react-navigation/stack';
import React, { useReducer } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationNavigator } from './src/Authentication';
import { authReducer, initialState } from './src/Authentication/authContext/';
import { AuthContext } from './src/Authentication/authContext/authContext';
import LoadAssets from './src/components/LoadAssets';
import { AppRoutesParamsList } from './src/components/Navigation';
import { ThemeProvider } from './src/components/Theme';
import { HomeNavigator } from './src/Home';

const AppStack = createStackNavigator<AppRoutesParamsList>();

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <ThemeProvider>
        <LoadAssets {...{ fonts }}>
          <SafeAreaProvider>
            {!state.isAuthenticated ? (
              <AppStack.Navigator headerMode="none">
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
