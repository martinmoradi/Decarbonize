import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutesParamsList } from "./src/components/Navigation";
import {AuthenticationNavigator} from './src/Authentication'
import {HomeNavigator} from './src/Home';
import * as React from 'react';
import 'react-native-gesture-handler';
import LoadAssets from './src/components/LoadAssets';

const AppStack = createStackNavigator<AppRoutesParamsList>();

const fonts = {
  'Avenir-Bold': require('./assets/fonts/AvenirNextLTPro-Bold.otf'),
  'Avenir-Semibold': require('./assets/fonts/AvenirNextLTPro-Demi.otf'),
  'Avenir-Regular': require('./assets/fonts/AvenirNextLTPro-Medium.otf'),
};


const App = () => {
  return (
      <LoadAssets {...{ fonts }}>
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen  name="Authentication" component={AuthenticationNavigator}/>
        <AppStack.Screen  name="Home" component={HomeNavigator}/>
      </AppStack.Navigator>
    </NavigationContainer>
    </LoadAssets>
  );
};


export default App;
