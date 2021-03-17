import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthRoutesParamsList } from '../components/Navigation';
import Login from './Auth';
import SignUp from "./SignUp"
import OnboardingScreen from './Onboarding';

const AuthenticationStack = createStackNavigator<AuthRoutesParamsList>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    </AuthenticationStack.Navigator>
  );
};
