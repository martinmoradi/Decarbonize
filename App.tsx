import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/Authentication/authContext';
import LoadAssets from './src/components/LoadAssets';
import AuthRouter from './src/components/routers/AuthRouter';
import { ThemeProvider } from './src/components/Theme';

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  return (
    <AuthProvider>
      <LoadAssets {...{ fonts }}>
        <ThemeProvider>
          <SafeAreaProvider>
            <AuthRouter />
          </SafeAreaProvider>
        </ThemeProvider>
      </LoadAssets>
    </AuthProvider>
  );
};

export default App;
