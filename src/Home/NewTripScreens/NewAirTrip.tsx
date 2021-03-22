import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Box, Text, TextButton, Button } from '../../components';
const { width } = Dimensions.get('window');

const NewAirTripScreen = ({navigation})=>{
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