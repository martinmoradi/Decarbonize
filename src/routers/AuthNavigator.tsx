import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import React from 'react';
import { AuthRoutesList } from './NavigationTypes';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import Login from '../screens/authentication/Login';
import OnboardingScreen from '../screens/authentication/Onboarding';
import PasswordChanged from '../screens/authentication/PasswordChanged';
import SignUp from '../screens/authentication/SignUp';
import Welcome from '../screens/authentication/Welcome';

const AuthenticationStack = createNativeStackNavigator<AuthRoutesList>();

const AuthNavigator = () => {
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

export default AuthNavigator;
