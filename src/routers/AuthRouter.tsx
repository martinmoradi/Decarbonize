import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import { useTypedSelector } from '../hooks';
import { AppRoutesList } from './NavigationTypes';
import HomeNavigator from './HomeNavigator';

const AppStack = createStackNavigator<AppRoutesList>();

const AuthRouter = () => {
  const { user } = useTypedSelector(state => state.authentication);

  return (
    <>
      {!user ? (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Authentication" component={AuthNavigator} />
        </AppStack.Navigator>
      ) : (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Home" component={HomeNavigator} />
        </AppStack.Navigator>
      )}
    </>
  );
};

export default AuthRouter;
