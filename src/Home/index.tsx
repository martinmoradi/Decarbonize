import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext, useEffect } from 'react';
import { HomeRoutesList } from '../components/Navigation';
import Tabbar from '../components/Tabs/Tabbar';
import DashboardScreen from './Dashboard';
import EngagementsScreen from './Engagements';
import HistoryScreen from './History';
import NewTripNavigator from './NewTripNavigator';
import SettingsNavigator from './Settings/SettingsNavigator';
import { useActions, useTypedSelector } from '../hooks';
import OnboardingContext from '../Authentication/onboardingContext/OnboardingContext';

const HomeTab = createBottomTabNavigator<HomeRoutesList>();

export const HomeNavigator = () => {
  const { onboardingData } = useContext(OnboardingContext);
  const { isEmpty } = useTypedSelector(state => state.emissions);
  const { user } = useTypedSelector(state => state.authentication);
  const { postForm, fetchEmissions } = useActions();

  useEffect(() => {
    if (user) {
      const { has_completed_onboarding } = user;
      if (isEmpty && !has_completed_onboarding) {
        postForm(onboardingData);
      } else if (isEmpty && has_completed_onboarding) {
        fetchEmissions();
      }
    }
  }, [user, isEmpty]);

  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Dashboard" component={DashboardScreen} />
      <HomeTab.Screen name="Engagements" component={EngagementsScreen} />
      <HomeTab.Screen name="NewTripNavigator" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={HistoryScreen} />
      <HomeTab.Screen name="Settings" component={SettingsNavigator} />
    </HomeTab.Navigator>
  );
};
