import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTypedSelector } from '../hooks';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { AppRoutesList } from './NavigationTypes';

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
