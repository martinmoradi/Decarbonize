import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthRoutesParamsList } from '../components/Navigation';
import Login from './Auth';
import ForgotPassword from './ForgotPassword';
import OnboardingScreen from './Onboarding';
import PasswordChanged from './PasswordChanged';
import SignUp from './SignUp';
import Welcome from './Welcome';
const AuthenticationStack = createStackNavigator<AuthRoutesParamsList>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none" initialRouteName="Welcome" >
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthenticationStack.Navigator>
  );
};
