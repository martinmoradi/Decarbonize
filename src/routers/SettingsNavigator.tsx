import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useActions } from '../hooks';
import Settings from '../screens/home/Settings';
import EnergySettingScreen from '../screens/home/settings-screens/EnergySettings';
import FoodSettingScreen from '../screens/home/settings-screens/FoodSettings';
import SpendingSettingScreen from '../screens/home/settings-screens/SpendingsSettings';
import { SettingsRoutesList } from './NavigationTypes';

const SettingsStack = createStackNavigator<SettingsRoutesList>();

export const SettingsNavigator = () => {
  const { fetchFixedEmissions } = useActions();

  useEffect(() => {
    fetchFixedEmissions();
  }, []);

  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="SettingsFood" component={FoodSettingScreen} />
      <SettingsStack.Screen name="SettingsEnergy" component={EnergySettingScreen} />
      <SettingsStack.Screen name="SettingsSpending" component={SpendingSettingScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
