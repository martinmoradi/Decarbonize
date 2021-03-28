import React from 'react';
import { TabBar, Tab } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, useTheme, Text } from '../components';
import NewTripNavigator from './NewTripNavigator';
import MealsScreen from '../screens/home/MealsScreen';

const NewNavigator = () => {
  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const theme = useTheme();

  const TopTabBar = ({ navigation, state }) => {
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
                New meal
              </Text>
            )}
          />
          <Tab
            title={props => (
              <Text {...props} style={[theme.textVariants.title2, { color: colorSecondTab }]}>
                New trip
              </Text>
            )}
          />
        </TabBar>
      </Box>
    );
  };

  return (
    <Navigator tabBar={props => <TopTabBar {...props} />}>
      <Screen name="Details" component={MealsScreen} />
      <Screen name="Totals" component={NewTripNavigator} />
    </Navigator>
  );
};

export default NewNavigator;
