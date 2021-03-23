import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';

const NewCarTripScreen = ({navigation}: TripStackNavigationProps<'NewCarTripScreen'>)=>{
    return (
        <Box style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                New Car Trip
            </Text>
            <Button variant="primary" label="Retour" onPress={()=> navigation.goBack()}/>

        </Box>
    )
};

export default NewCarTripScreen;