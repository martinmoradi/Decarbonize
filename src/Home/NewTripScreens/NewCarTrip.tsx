import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Box, Text, TextButton, Button } from '../../components';
const { width } = Dimensions.get('window');

const NewCarTripScreen = ({navigation})=>{
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