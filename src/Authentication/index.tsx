import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthRoutesParamsList } from '../components/Navigation';
import AuthScreen from './Auth';
import OnboardingScreen from './Onboarding';

const AuthenticationStack = createStackNavigator<AuthRoutesParamsList>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthenticationStack.Screen name="Auth" component={AuthScreen} />
    </AuthenticationStack.Navigator>
  );
};
