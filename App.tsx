import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/components/LoadAssets';
import { ThemeProvider } from './src/components/Theme';
import AuthRouter from './src/components/routers/AuthRouter';
import AuthProvider from './src/Authentication/authContext/AuthProvider';

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
          <SafeAreaProvider>
            <AuthRouter />
          </SafeAreaProvider>
        </AuthProvider>
      </ThemeProvider>
    </LoadAssets>
  );
};

export default App;
