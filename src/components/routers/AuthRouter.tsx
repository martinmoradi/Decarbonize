import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { AuthenticationNavigator } from '../../Authentication';
import { AuthContext } from '../../Authentication/authContext';
import { OnboardingProvider } from '../../Authentication/onboardingContext/OnboardingProvider';
import { AppRoutesParamsList } from '../../components/Navigation';
import { HomeNavigator } from '../../Home';

const AppStack = createStackNavigator<AppRoutesParamsList>();

const AuthRouter = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      {!state.user ? (
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
