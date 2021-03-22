import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext, useEffect } from 'react';
import { HomeRoutesParamsList } from '../components/Navigation';
import Tabbar from '../components/Tabs/Tabbar';
import DashboardScreen from './Dashboard';
import EngagementsScreen from './Engagements';
import HistoryScreen from './History';
import NewTripScreen from './NewTrip';
import SettingsScreen from './Settings';
import { useActions, useTypedSelector } from '../hooks';
import OnboardingContext from '../Authentication/onboardingContext/OnboardingContext';

const HomeTab = createBottomTabNavigator<HomeRoutesParamsList>();

export const HomeNavigator = () => {
  const { onboardingData } = useContext(OnboardingContext);
  const { isEmpty } = useTypedSelector(state => state.emissions);
  const { user } = useTypedSelector(state => state.authentication);
  const { postForm, fetchEmissions } = useActions();

  useEffect(() => {
    if (isEmpty && user && !user.user.has_completed_onboarding) {
      postForm(onboardingData);
    } else if (isEmpty && user && user.user.has_completed_onboarding) {
      fetchEmissions();
    }
  }, []);

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
