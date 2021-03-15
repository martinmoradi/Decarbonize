import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoutesParamsList } from '../components/Navigation';
import DashboardScreen from './Dashboard';
import HistoryScreen from './History';
import SettingsScreen from './Settings';
import EngagementsScreen from './Engagements';

const HomeTab = createBottomTabNavigator<HomeRoutesParamsList>();

export const HomeNavigator = () => {
    return (
    <HomeTab.Navigator  tabBarOptions={{style: {paddingBottom: 15}}}>
        <HomeTab.Screen name="Dashboard" component={DashboardScreen} />
        <HomeTab.Screen name="History" component={HistoryScreen} />
        <HomeTab.Screen name="Engagements" component={EngagementsScreen} />
        <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
    )
}