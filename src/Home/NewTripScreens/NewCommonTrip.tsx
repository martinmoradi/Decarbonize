import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';


const NewCommonTripScreen = ({navigation}: TripStackNavigationProps<'NewCommonTripScreen'>)=>{
    return (
        <Box style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                New Common Trip
            </Text>
            <Button variant="primary" label="Retour" onPress={()=> navigation.goBack()}/>
        </Box>
    )
};

export default NewCommonTripScreen;