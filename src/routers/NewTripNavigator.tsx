import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewTrip from '../screens/home/NewTrip';
import NewCarTrip from '../screens/home/new-trip-screens/NewCarTrip';
import NewAirTrip from '../screens/home/new-trip-screens/NewAirTrip';
import NewCommonTrip from '../screens/home/new-trip-screens/NewCommonTrip';
import { TripRoutesList } from './NavigationTypes';
import AirPortSearch from '../screens/home/new-trip-screens/AirportSearch';
import AirPortResults from '../screens/home/new-trip-screens/AirportResults';

const NewTripStack = createStackNavigator<TripRoutesList>();

export const NewTripNavigator = () => {
  return (
    <NewTripStack.Navigator headerMode="none">
      <NewTripStack.Screen name="NewTrip" component={NewTrip} />
      <NewTripStack.Screen name="NewCarTrip" component={NewCarTrip} />
      <NewTripStack.Screen name="NewAirTrip" component={NewAirTrip} />
      <NewTripStack.Screen name="NewCommonTrip" component={NewCommonTrip} />
      <NewTripStack.Screen name="AirPortSearch" component={AirPortSearch} />
      <NewTripStack.Screen name="AirPortResults" component={AirPortResults} />
    </NewTripStack.Navigator>
  );
};

export default NewTripNavigator;
