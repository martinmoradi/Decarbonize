import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewTripScreen from './NewTrip';
import NewCarTripScreen from './NewTripScreens/NewCarTrip';
import NewAirTripScreen from './NewTripScreens/NewAirTrip';
import NewCommonTripScreen from './NewTripScreens/NewCommonTrip';

const NewTripStack = createStackNavigator();

export const NewTripNavigator = ()=>{

return(
        <NewTripStack.Navigator headerMode="none">
            <NewTripStack.Screen name="NewTrip" component={NewTripScreen}/>
            <NewTripStack.Screen name="NewCarTrip" component={NewCarTripScreen}/>
            <NewTripStack.Screen name="NewAirTrip" component={NewAirTripScreen}/>
            <NewTripStack.Screen name="NewCommonTrip" component={NewCommonTripScreen}/>
        </NewTripStack.Navigator>
    )
}

export default NewTripNavigator;