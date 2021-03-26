import React, { useState } from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import { Dimensions, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

const AirPortSearch = ({ route, navigation }: TripStackNavigationProps<'AirPortSearch'>) => {
  const [airport, setAirport] = useState('');

  return (
    <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
          SVG Avion
        </Text>
      </Box>
      <Box
        marginBottom="s"
        justifyContent="center"
        alignItems="center"
        paddingBottom="m"
        style={{
          width: width - 40,
          height: 200,
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
          {route.params.type} Airport
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            margin: 12,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
          onChangeText={setAirport}
          value={airport}
          placeholder={'Paris'}
        />
        <Button
          variant="default"
          label="Chercher"
          onPress={() =>
            navigation.navigate('AirPortResults', { query: airport, type: route.params.type })
          }
        />
      </Box>
      <Button variant="primary" label="Retour" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default AirPortSearch;
