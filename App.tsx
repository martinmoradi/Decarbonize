import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoadAssets } from './src/components';
import { ThemeProvider } from './src/components/Theme';
import AuthRouter from './src/routers/AuthRouter';
import { store } from './src/redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

enableScreens();

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
          <SafeAreaProvider>
            <AuthRouter />
          </SafeAreaProvider>
        </ThemeProvider>
      </LoadAssets>
    </Provider>
  );
};

export default App;
