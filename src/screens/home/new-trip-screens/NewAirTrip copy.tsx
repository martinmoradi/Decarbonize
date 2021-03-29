import React, { useEffect, useState } from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import Checkbox from '../../../components/Checkbox';
import { Dimensions, ActivityIndicator, ScrollView, View, StyleSheet } from 'react-native';
import { useTypedSelector, useActions } from '../../../hooks';

const { width } = Dimensions.get('window');

const NewAirTrip = ({ route, navigation }: TripStackNavigationProps<'NewAirTrip'>) => {
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);
  const { postAirTrips } = useActions();

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
    <ScrollView style={{ backgroundColor: '#0C0D34' }}>
      <View style={styles.mainView}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="secondary"
          marginBottom="s"
        ></Box>
        <Box
          marginBottom="s"
          justifyContent="space-evenly"
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
            elevation: 10,
          }}
          backgroundColor="lightgray"
        >
          <Text variant="title2">Departure Airport</Text>
          {tripData.departure !== '' ? <Text>{tripData.departure}</Text> : null}
          <Button
            variant="primary"
            label="Search"
            onPress={() => navigation.navigate('AirPortSearch', { type: 'departure' })}
          />
        </Box>
        <Box
          marginBottom="s"
          justifyContent="space-around"
          alignItems="center"
          paddingBottom="m"
          style={{
            width: width - 40,
            height: 250,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.5,
            shadowRadius: 12.35,
            elevation: 10,
          }}
          backgroundColor="lightgray"
        >
          <Text variant="title2">Arrival Airport</Text>
          {tripData.arrival !== '' ? <Text>{tripData.arrival}</Text> : null}
          <Button
            variant="primary"
            label="Search"
            onPress={() => navigation.navigate('AirPortSearch', { type: 'arrival' })}
          />
          <Checkbox
            label="Round Trip ?"
            checked={tripData.round_trip}
            onChange={() => setTripData({ ...tripData, round_trip: !tripData.round_trip })}
          />

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
            <View style={{ flexDirection: 'row', maxWidth: width }}>
              <Button
                variant="default"
                label="Go Back"
                onPress={() => navigation.goBack()}
                style={{ width: 140 }}
              />
              <Button
                variant="primary"
                label="Add"
                onPress={() => postAirTrips(tripData)}
                style={{ width: 140 }}
              />
            </View>
          )}
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0C0D34',
  },
  boxContainer: {
    width: width,
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
});
export default NewAirTrip;
