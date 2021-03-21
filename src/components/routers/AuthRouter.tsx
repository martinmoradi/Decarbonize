import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthenticationNavigator } from '../../Authentication';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { OnboardingProvider } from '../../Authentication/onboardingContext/OnboardingProvider';
import { AppRoutesParamsList } from '../../components/Navigation';
import { HomeNavigator } from '../../Home';

const AppStack = createStackNavigator<AppRoutesParamsList>();

const AuthRouter = () => {
  const { user } = useTypedSelector(state => state.authentication);
  return (
    <>
      {!user ? (
        <OnboardingProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
          </AppStack.Navigator>
        </OnboardingProvider>
      ) : (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      )}
    </>
  );
};

export default AuthRouter;
