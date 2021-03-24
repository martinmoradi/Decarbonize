import React, { useEffect, useState } from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import Checkbox from '../../../components/Checkbox';
import { Dimensions, ActivityIndicator } from 'react-native';
import { useTypedSelector } from '../../../hooks';

const { width } = Dimensions.get('window');

const NewAirTrip = ({ route, navigation }: TripStackNavigationProps<'NewAirTrip'>) => {
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);

  const [tripData, setTripData] = useState({
    round_trip: false,
    departure: '',
    arrival: '',
    departure_latitude: 0,
    departure_longitude: 0,
    arrival_latitude: 0,
    arrival_longitude: 0,
  });

  useEffect(() => {
    if (route.params) {
      if (route.params.type === 'departure') {
        setTripData({
          ...tripData,
          departure: route.params.queryResult.name,
          departure_latitude: route.params.queryResult.coordinates.latitude,
          departure_longitude: route.params.queryResult.coordinates.longitude,
        });
      } else {
        setTripData({
          ...tripData,
          arrival: route.params.queryResult.name,
          arrival_latitude: route.params.queryResult.coordinates.latitude,
          arrival_longitude: route.params.queryResult.coordinates.longitude,
        });
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
        {tripData.departure !== '' ? <Text>{tripData.departure}</Text> : null}
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
        {tripData.arrival !== '' ? <Text>{tripData.arrival}</Text> : null}
        <Button
          variant="default"
          label="Selectionner"
          onPress={() => navigation.navigate('AirPortSearch', { type: 'arrival' })}
        />
      </Box>
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
        <Checkbox
          label="Aller Retour ?"
          checked={tripData.round_trip}
          onChange={() => setTripData({ ...tripData, round_trip: !tripData.round_trip })}
        />
      </Box>
      {errorMessage ? (
        <Text
          variant="body"
          style={{ fontFamily: 'Avenir-Semibold', color: '#FF0058' }}
          textAlign="center"
          marginBottom="l"
        >
          {errorMessage}
        </Text>
      ) : null}
      {isLoading ? (
        <Button
          variant="primary"
          label={<ActivityIndicator />}
          onPress={() => postAirTrips(tripData)}
        />
      ) : (
        <Button variant="primary" label="Valider" onPress={() => postAirTrips(tripData)} />
      )}
      <Button variant="default" label="Retour" onPress={() => navigation.goBack()} />

    </Box>
  );
};

export default NewAirTrip;
