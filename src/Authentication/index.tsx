import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import React from 'react';
import { AuthRoutesList } from '../components/Navigation';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import OnboardingScreen from './Onboarding';
import PasswordChanged from './PasswordChanged';
import SignUp from './SignUp';
import Welcome from './Welcome';

const AuthenticationStack = createNativeStackNavigator<AuthRoutesList>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: 'transparent' },
      }}
    >
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen name="PasswordChanged" component={PasswordChanged} />
      <AuthenticationStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthenticationStack.Navigator>
  );
};
