import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewTripScreen from './NewTripScreen';
import NewCarTripScreen from './NewTripScreens/NewCarTrip';
import NewAirTripScreen from './NewTripScreens/NewAirTrip';
import NewCommonTripScreen from './NewTripScreens/NewCommonTrip';
import { TripRoutesList } from '../components/Navigation';

const NewTripStack = createStackNavigator<TripRoutesList>();

export const NewTripNavigator = ()=>{

return(
        <NewTripStack.Navigator headerMode="none">
            <NewTripStack.Screen name="NewTripScreen" component={NewTripScreen}/>
            <NewTripStack.Screen name="NewCarTripScreen" component={NewCarTripScreen}/>
            <NewTripStack.Screen name="NewAirTripScreen" component={NewAirTripScreen}/>
            <NewTripStack.Screen name="NewCommonTripScreen" component={NewCommonTripScreen}/>
        </NewTripStack.Navigator>
    )
}

export default NewTripNavigator;