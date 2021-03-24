import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';
import Checkbox from '../../components/Form/Checkbox';
import { useActions, useTypedSelector } from '../../hooks';
import { Dimensions, TextInput, ActivityIndicator } from 'react-native';
const { width } = Dimensions.get('window');

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