import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { AuthenticationNavigator } from '../../Authentication';
import { useTypedSelector, useActions } from '../../hooks';
import { AppRoutesParamsList } from '../../components/Navigation';
import { HomeNavigator } from '../../Home';

const AppStack = createStackNavigator<AppRoutesParamsList>();

const AuthRouter = () => {
  const { user } = useTypedSelector(state => state.authentication);

  return (
    <>
      {!user ? (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
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
