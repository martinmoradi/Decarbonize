import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthRoutesParamsList } from '../components/Navigation';
import Login from './Auth';
import Welcome from './Welcome';
import ForgotPassword from './ForgotPassword';
import OnboardingScreen from './Onboarding';
import PasswordChanged from './PasswordChanged';
import SignUp from './SignUp';

const AuthenticationStack = createStackNavigator<AuthRoutesParamsList>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
