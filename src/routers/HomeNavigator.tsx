import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { HomeRoutesList } from './NavigationTypes';
import Dashboard from '../screens/home/Dashboard';
import Commitments from '../screens/home/Commitments';
import History from '../screens/home/History';
import Settings from '../screens/home/Settings';
import NewTripNavigator from './NewTripNavigator';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import { useActions, useTypedSelector } from '../hooks';
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar';

const HomeTab = createBottomTabNavigator<HomeRoutesList>();

const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  Home: {
    labelStyle: {
      fontSize: 13,
    },
    icon: {
      component: props => <Feather {...props} name="home" size={24} color="#616164" />,
      activeColor: '#39D697',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#A9EFD2',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Deeds: {
    labelStyle: {
      fontSize: 13,
    },
    icon: {
      component: props => (
        <MaterialCommunityIcons {...props} name="earth-plus" size={24} color="#616164" />
      ),
      activeColor: '#39D697',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#A9EFD2',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  New: {
    labelStyle: {
      fontSize: 13,
    },
    icon: {
      component: props => <Feather {...props} name="plus-circle" size={24} color="#616164" />,
      activeColor: '#1194AA',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#A9EFD2',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  History: {
    labelStyle: {
      fontSize: 13,
    },
    icon: {
      component: props => (
        <MaterialCommunityIcons {...props} name="history" size={24} color="#616164" />
      ),
      activeColor: '#1194AA',
      inactiveColor: '#616164',
    },
    background: {
      activeColor: '#A9EFD2',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Profile: {
    labelStyle: {
      fontSize: 13,
    },
    icon: {
      component: props => <AntDesign {...props} name="setting" size={24} color="#616164" />,
      activeColor: '#39D697',
      inactiveColor: '#616164',
    },
    background: {
      activeColor: '#A9EFD2',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

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
  }, [user, isEmpty, data]);

  return (
    <HomeTab.Navigator
      tabBar={props => <AnimatedTabBar tabs={tabs} {...props} style={styles.tabContainer} />}
    >
      <HomeTab.Screen name="Home" component={Dashboard} />
      <HomeTab.Screen name="Deeds" component={Commitments} />
      <HomeTab.Screen name="New" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={History} />
      <HomeTab.Screen name="Profile" component={Settings} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    height: 80,
  },
});
