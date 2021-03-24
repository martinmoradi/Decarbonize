import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
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
    Home: {
      labelStyle: {
        fontSize: 12,
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
        fontSize: 12,
      },
      icon: {
        component: props => <MaterialCommunityIcons name="earth-plus" size={24} color="#616164" />,
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
        fontSize: 12,
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
        fontSize: 12,
      },
      icon: {
        component: props => <MaterialCommunityIcons name="history" size={24} color="#616164" />,
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
        fontSize: 12,
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

  return (
    <HomeTab.Navigator tabBar={props => <AnimatedTabBar tabs={tabs} {...props} />}>
      <HomeTab.Screen name="Home" component={Dashboard} />
      <HomeTab.Screen name="Deeds" component={Commitments} />
      <HomeTab.Screen name="New" component={NewTripNavigator} />
      <HomeTab.Screen name="History" component={History} />
      <HomeTab.Screen name="Profile" component={Settings} />
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
