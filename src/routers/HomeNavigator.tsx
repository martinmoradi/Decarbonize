import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { HomeRoutesList } from './NavigationTypes';
import Dashboard from '../screens/home/Dashboard';
import Commitments from '../screens/home/Commitments';
import HistoryScreen from '../screens/home/History';
import NewTripNavigator from './NewTripNavigator';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import SettingsScreen from '../screens/home/Settings';
import { useActions, useTypedSelector } from '../hooks';
import Test from './Test';
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar';
import { Chart, Ecology, Home, Settings, Plus } from '../screens/home/components/Tabs/icons';
import EcoCar from '../screens/home/components/icons/icons/EcoCar';

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
      } else if (isEmpty && has_completed_onboarding && isTripsEmpty) {
        fetchEmissions();
        fetchTrips();
      }
    }
  }, [user, isEmpty]);

  const tabs: TabsConfig<BubbleTabBarItemConfig> = {
    Dashboard: {
      labelStyle: {
        color: 'white',
        fontSize: 12,
      },
      icon: {
        component: props => <AntDesign {...props} name="home" size={24} color="#616164" />,
        activeColor: '#39D697',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: '#39D697',
        inactiveColor: 'rgba(223,215,243,0)',
      },
    },
    Commitments: {
      labelStyle: {
        color: 'white',
        fontSize: 12,
      },
      icon: {
        component: props => <Feather {...props} name="check-circle" size={24} color="#616164" />,
        activeColor: '#39D697',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: '#39D697',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    },
    NewTripNavigator: {
      labelStyle: {
        color: 'white',
        fontSize: 12,
      },
      icon: {
        component: props => <Feather {...props} name="plus-circle" size={24} color="#616164" />,
        activeColor: '#1194AA',
        inactiveColor: 'rgba(0,0,0,1)',
      },
      background: {
        activeColor: '#39D697',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    },
    History: {
      labelStyle: {
        color: 'white',
        fontSize: 12,
      },
      icon: {
        component: props => <Chart {...props} name="activity" size={24} color="#616164" />,
        activeColor: '#1194AA',
        inactiveColor: '#616164',
      },
      background: {
        activeColor: '#39D697',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    },
    Settings: {
      labelStyle: {
        color: 'white',
        fontSize: 12,
      },
      icon: {
        component: props => <Settings {...props} name="activity" size={24} color="black" />,
        activeColor: '#39D697',
        inactiveColor: '#616164',
      },
      background: {
        activeColor: '#39D697',
        inactiveColor: 'rgba(207,235,239,0)',
      },
    },
  };

  return (
    <HomeTab.Navigator tabBar={props => <AnimatedTabBar tabs={tabs} {...props} />}>
      <HomeTab.Screen name="Dashboard" component={Dashboard} />
      <HomeTab.Screen name="Commitments" component={Commitments} />
      <HomeTab.Screen name="NewTripNavigator" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={HistoryScreen} />
      <HomeTab.Screen name="Settings" component={SettingsScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;

// Commitments: {
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component: <Ecology />,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
//   Plus: {
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component: <Plus />,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
//   Chart: {
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component: <Chart />,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
//   Settings: {
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component: <Settings />,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
