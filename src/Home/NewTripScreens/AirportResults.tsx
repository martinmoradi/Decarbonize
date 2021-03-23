import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';
import { useActions, useTypedSelector } from '../../hooks';
import { Dimensions, TextInput, ActivityIndicator } from 'react-native';
const { width } = Dimensions.get('window');

const AirPortResults = ({route, navigation}: TripStackNavigationProps<'AirPortResults'>)=>{



    return (
        <Box style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
             <Box
        marginBottom="s"
        justifyContent="center"
        alignItems="center"
        paddingBottom="m"
        style={{
          width: width - 40,
          height: 100,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,
          elevation: 19,
        }}
        backgroundColor="primary"
      >
        <Text variant="title2" color="white">
         Query for {route.params.type}: {route.params.query}
        </Text>        

        </Box>
        <Button variant="primary" label="Valider" onPress={()=> navigation.navigate('NewAirTripScreen', {type: route.params.type, query: route.params.query})}/>
            <Button variant="primary" label="Retour" onPress={()=> navigation.goBack()}/>
        </Box>
    )
};

export default AirPortResults;