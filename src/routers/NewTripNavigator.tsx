import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewAirTrip from '../screens/home/new-trip-screens/NewAirTrip';
import NewCarTrip from '../screens/home/new-trip-screens/NewCarTrip';
import NewCommonTrip from '../screens/home/new-trip-screens/NewCommonTrip';
import NewTrip2 from '../screens/home/NewTrip';
import { TripRoutesList } from './NavigationTypes';

const NewTripStack = createStackNavigator<TripRoutesList>();

export const NewTripNavigator = () => {
  return (
    <NewTripStack.Navigator headerMode="none">
      <NewTripStack.Screen name="NewTrip" component={NewTrip2} />
      <NewTripStack.Screen name="NewCarTrip" component={NewCarTrip} />
      <NewTripStack.Screen name="NewAirTrip" component={NewAirTrip} />
      <NewTripStack.Screen name="NewCommonTrip" component={NewCommonTrip} />
    </NewTripStack.Navigator>
  );
};

export default NewTripNavigator;
