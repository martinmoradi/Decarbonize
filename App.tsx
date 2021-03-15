import * as React from 'react';
import 'react-native-gesture-handler';
import HelloWorld from './src/components/HelloWorld';
import LoadAssets from './src/components/LoadAssets';

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};

const App = () => {
  return (
    <LoadAssets {...{ fonts }}>
      <HelloWorld name="Decarbonize" />
    </LoadAssets>
  );
};

export default App;
