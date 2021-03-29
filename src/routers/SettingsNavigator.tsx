import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/home/Settings';
import { SettingsRoutesList } from './NavigationTypes';
import FoodSettingScreen from '../screens/home/settings-screens/FoodSettings';
import EnergySettingScreen from '../screens/home/settings-screens/EnergySettings';
import SpendingSettingScreen from '../screens/home/settings-screens/SpendingsSettings';
import { useActions } from '../hooks';

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
