import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TripRoutesList } from '../components/Navigation';
import Settings from './Settings';
import SettingsScreen from './Settings';
import SettingsEmission from './SettingsEmission';

const SettingsStack = createStackNavigator<TripRoutesList>();

export const SettingNavigator = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="SettingsEmission" component={SettingsEmission} />
    </SettingsStack.Navigator>
  );
};

export default SettingNavigator;
