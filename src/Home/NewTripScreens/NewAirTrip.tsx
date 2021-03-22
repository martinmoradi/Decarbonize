import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';


const NewAirTripScreen = ({navigation}: TripStackNavigationProps<'NewAirTripScreen'>)=>{
    return (
        <Box style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                New Air Trip
            </Text>
            <Button variant="primary" label="Retour" onPress={()=> navigation.goBack()}/>
        </Box>
    )
};

export default NewAirTripScreen;