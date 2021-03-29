import React from 'react';
import { TabBar, Tab } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, useTheme, Text } from '../components';
import History from '../screens/home/History';
import TotalsHistory from '../screens/home/TotalsHistory';
import { HomeTabNavigationProps } from './NavigationTypes';

const HistoryNavigator = () => {
  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const theme = useTheme();

  const TopTabBar = ({ navigation, state }: HomeTabNavigationProps<'History'>) => {
    console.log('state:', state);
    const colorFirstTab = state.index === 0 ? '#39D697' : '#F3F4F6';
    const colorSecondTab = state.index === 1 ? theme.colors.primary : '#F3F4F6';
    return (
      <Box style={{}}>
        <TabBar
          selectedIndex={state.index}
          onSelect={index => navigation.navigate(state.routeNames[index])}
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 3,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
          indicatorStyle={{ backgroundColor: theme.colors.primary }}
        >
          <Tab
            title={props => (
              <Text {...props} style={[theme.textVariants.title2, { color: colorFirstTab }]}>
                Details
              </Text>
            )}
          />
          <Tab
            title={props => (
              <Text {...props} style={[theme.textVariants.title2, { color: colorSecondTab }]}>
                Totals
              </Text>
            )}
          />
        </TabBar>
      </Box>
    );
  };

  return (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
      <Screen name="Details" component={History} />
      <Screen name="Totals" component={TotalsHistory} />
    </Navigator>
  );
};

export default HistoryNavigator;
