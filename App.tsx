import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/components/LoadAssets';
import { ThemeProvider } from './src/components/Theme';
import AuthRouter from './src/components/routers/AuthRouter';
import AuthProvider from './src/Authentication/authContext/AuthProvider';
import { store } from './src/state';
import { Provider } from 'react-redux';

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  return (
    <Provider store={store}>
      <LoadAssets {...{ fonts }}>
        <ThemeProvider>
          <AuthProvider>
            <SafeAreaProvider>
              <AuthRouter />
            </SafeAreaProvider>
          </AuthProvider>
        </ThemeProvider>
      </LoadAssets>
    </Provider>
  );
};

export default App;
