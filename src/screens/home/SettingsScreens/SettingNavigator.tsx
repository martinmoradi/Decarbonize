import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../Settings';
import SettingsEmission from './SettingEmissionScreen';
import { SettingsRoutesList } from '../../../routers/NavigationTypes';
import FoodSettingScreen from './FoodSettingScreen';
import EnergySettingScreen from './EnergySettingScreen';
import SpendingSettingScreen from './SpendingSettingScreen';

const SettingsStack = createStackNavigator<SettingsRoutesList>();

export const SettingNavigator = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="SettingsEmission" component={SettingsEmission} />
      <SettingsStack.Screen name="SettingsFood" component={FoodSettingScreen} />
      <SettingsStack.Screen name="SettingsEnergy" component={EnergySettingScreen} />
      <SettingsStack.Screen name="SettingsSpending" component={SpendingSettingScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingNavigator;
