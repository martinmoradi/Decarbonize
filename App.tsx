import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutesParamsList } from "./src/components/Navigation";
import {AuthenticationNavigator} from './src/Authentication'
import {HomeNavigator} from './src/Home';


const AppStack = createStackNavigator<AppRoutesParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen  name="Authentication" component={AuthenticationNavigator}/>
        <AppStack.Screen  name="Home" component={HomeNavigator}/>
      </AppStack.Navigator>
    </NavigationContainer>

  );
}


