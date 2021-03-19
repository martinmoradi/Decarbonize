import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeRoutesParamsList } from '../components/Navigation';
import Tabbar from '../components/Tabs/Tabbar';
import DashboardScreen from './Dashboard';
import EngagementsScreen from './Engagements';
import HistoryScreen from './History';
import NewTripScreen from './NewTrip';
import SettingsScreen from './Settings';

const HomeTab = createBottomTabNavigator<HomeRoutesParamsList>();

export const HomeNavigator = () => {
  return (
    <HomeTab.Navigator tabBar={props => <Tabbar {...props} />}>
      <HomeTab.Screen name="Dashboard" component={DashboardScreen} />
      <HomeTab.Screen name="Engagements" component={EngagementsScreen} />
      <HomeTab.Screen name="NewTrip" component={NewTripScreen} />
      <HomeTab.Screen name="History" component={HistoryScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
};
