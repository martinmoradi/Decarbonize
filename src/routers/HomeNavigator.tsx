import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { HomeRoutesList } from './NavigationTypes';
import DashboardScreen from '../screens/home/Dashboard';
import Commitments from '../screens/home/Commitments';
import HistoryScreen from '../screens/home/History';
import NewTripNavigator from './NewTripNavigator';
import SettingsScreen from '../screens/home/Settings';
import { useActions, useTypedSelector } from '../hooks';

const HomeTab = createBottomTabNavigator<HomeRoutesList>();

const HomeNavigator = () => {
  const { isEmpty } = useTypedSelector(state => state.emissions);
  const { isTripsEmpty, data } = useTypedSelector(state => state.trips);
  const { user } = useTypedSelector(state => state.authentication);
  const { food, energy, spending } = useTypedSelector(state => state.onboarding);
  const { postForm, fetchEmissions, fetchTrips } = useActions();

  useEffect(() => {
    if (user) {
      const { has_completed_onboarding } = user;
      if (isEmpty && !has_completed_onboarding) {
        postForm({ ...food, ...energy, ...spending });
      } else if (isEmpty && has_completed_onboarding && isTripsEmpty) {
        fetchEmissions();
        fetchTrips();
      } 
    }
  }, [user, isEmpty ]);

  useEffect(() =>{
    fetchEmissions();
  }, [data])

  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Dashboard" component={DashboardScreen} />
      <HomeTab.Screen name="Commitments" component={Commitments} />
      <HomeTab.Screen name="NewTripNavigator" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={HistoryScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
