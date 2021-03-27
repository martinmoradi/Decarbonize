import React from 'react';
import { StyleSheet } from 'react-native';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, useTheme } from '../components';
import History from '../screens/home/History';

const HistoryNavigator = () => {
  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const theme = useTheme();

  const UsersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Details</Text>
    </Layout>
  );

  const OrdersScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Totals</Text>
    </Layout>
  );
  const TopTabBar = ({ navigation, state }) => {
    const colorFirstTab = state.index === 0 ? '#39D697' : 'gray';
    const colorSecondTab = state.index === 1 ? theme.colors.primary : 'white';
    const stylesProps = () => ({ color: colorFirstTab });
    return (
      <Box style={{}}>
        <TabBar
          selectedIndex={state.index}
          onSelect={index => navigation.navigate(state.routeNames[index])}
          style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 1,
          }}
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
    <Navigator
      tabBar={props => <TopTabBar {...props} tabBarOptions={{ activeTintColor: '#e91e63' }} />}
    >
      <Screen name="Details" component={History} />
      <Screen name="Totals" component={OrdersScreen} />
    </Navigator>
  );
};

export default HistoryNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    zIndex: 1,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    color: 'salmon',
  },
});
