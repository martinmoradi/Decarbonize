import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {AuthRoutesParamsList} from '../components/Navigation';
import OnboardingScreen from './Onboarding';
import AuthScreen from './Auth';



const AuthenticationStack = createStackNavigator<AuthRoutesParamsList>();

export const AuthenticationNavigator = () =>{
  return(<AuthenticationStack.Navigator  >
    <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen}/>
    <AuthenticationStack.Screen name="Auth" component={AuthScreen}/>
  </AuthenticationStack.Navigator>
  )
}
