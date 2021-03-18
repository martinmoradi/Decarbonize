import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticationNavigator } from './src/Authentication';
import { OnboardingProvider } from './src/Authentication/onboardingContext/OnboardingProvider';
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
  return (
    <ThemeProvider>
      <OnboardingProvider>
        <LoadAssets {...{ fonts }}>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none">
              <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
              <AppStack.Screen name="Home" component={HomeNavigator} />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
      </OnboardingProvider>
    </ThemeProvider>
  );
};

export default App;
