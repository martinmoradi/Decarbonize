import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { HomeRoutesList } from './NavigationTypes';
import Tabbar from '../screens/home/components/Tabs/Tabbar';
import DashboardScreen from '../screens/home/Dashboard';
import EngagementsScreen from '../screens/home/Commitments';
import HistoryScreen from '../screens/home/History';
import NewTripNavigator from './NewTripNavigator';
import SettingsScreen from '../screens/home/Settings';
import { useActions, useTypedSelector } from '../hooks';

const HomeTab = createBottomTabNavigator<HomeRoutesList>();

const HomeNavigator = () => {
  const { isEmpty } = useTypedSelector(state => state.emissions);
  const { isTripsEmpty } = useTypedSelector(state => state.trips);
  const { user } = useTypedSelector(state => state.authentication);
  const { food, energy, spending } = useTypedSelector(state => state.onboarding);
  const { postForm, fetchEmissions, fetchTrips } = useActions();

  useEffect(() => {
    if (user) {
      const { has_completed_onboarding } = user;
      if (isEmpty && !has_completed_onboarding) {
        postForm({ ...food, ...energy, ...spending });
      } else if (isEmpty && has_completed_onboarding) {
        postForm({ ...food, ...energy, ...spending });
      } else if (isEmpty && has_completed_onboarding && isTripsEmpty) {
        fetchEmissions();
        fetchTrips();
      }
    }
  }, [user, isEmpty]);

  return (
    <HomeTab.Navigator tabBar={props => <Tabbar {...props} />}>
      <HomeTab.Screen name="Dashboard" component={DashboardScreen} />
      <HomeTab.Screen name="Engagements" component={EngagementsScreen} />
      <HomeTab.Screen name="NewTripNavigator" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={HistoryScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
