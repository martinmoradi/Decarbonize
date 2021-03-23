import React from 'react';
import { Box, Text, Button } from '../../components';
import { TripStackNavigationProps } from '../../components/Navigation';
import Checkbox from '../../components/Form/Checkbox';
import { useActions, useTypedSelector } from '../../hooks';
import { Dimensions, TextInput, ActivityIndicator } from 'react-native';
const { width } = Dimensions.get('window');

const NewAirTripScreen = ({ route, navigation }: TripStackNavigationProps<'NewAirTripScreen'>) => {
  const [departure, setDeparture] = React.useState('');
  const [arrival, setArrival] = React.useState('');

  React.useEffect(() => {
    if (route.params ) {
      if (route.params.type === 'departure') {
        setDeparture(route.params.query);
      } else {
        setArrival(route.params.query);
      }
    }
  }, [route.params]);
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
          Aéroport de départ
        </Text>
        {departure !== ('') ? <Text>{departure}</Text> : null}
        <Button
          variant="default"
          label="Selectionner"
          onPress={() => navigation.navigate('AirPortSearch', { type: 'departure' })}
        />
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
          Aéroport d'arrivée
        </Text>
        {arrival !== ('') ? <Text>{arrival}</Text> : null}
        <Button
          variant="default"
          label="Selectionner"
          onPress={() => navigation.navigate('AirPortSearch', { type: 'arrival' })}
        />
      </Box>
      <Button variant="primary" label="Retour" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default NewAirTripScreen;
