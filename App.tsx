import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
<<<<<<< HEAD
import AuthProvider from './src/Authentication/authContext/AuthProvider';
import { OnboardingProvider } from './src/Authentication/onboardingContext/OnboardingProvider';
import LoadAssets from './src/components/LoadAssets';
import AuthRouter from './src/components/routers/AuthRouter';
import { ThemeProvider } from './src/components/Theme';
=======
import { OnboardingProvider } from './src/Authentication/onboardingContext/OnboardingProvider';
import LoadAssets from './src/components/LoadAssets';
import { ThemeProvider } from './src/components/Theme';
import AuthRouter from './src/components/routers/AuthRouter';
import AuthProvider from './src/Authentication/authContext/AuthProvider';
>>>>>>> f0c25081bc601c30c499bf41e1fafbace324f2b9

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  return (
    <LoadAssets {...{ fonts }}>
      <ThemeProvider>
        <AuthProvider>
          <OnboardingProvider>
            <SafeAreaProvider>
              <AuthRouter />
            </SafeAreaProvider>
          </OnboardingProvider>
        </AuthProvider>
      </ThemeProvider>
    </LoadAssets>
  );
};

export default App;
