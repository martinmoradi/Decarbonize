import React, { useState } from 'react';
import { Box, Text, Button, Checkbox } from '../../../components';
import { TripStackNavigationProps } from '../../../routers';
import { useActions, useTypedSelector } from '../../../hooks';
import { Dimensions, TextInput, ActivityIndicator, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  Button: { width: 100, margin: 5 },
});

const NewCarTrip = ({ navigation }: TripStackNavigationProps<'NewCarTrip'>) => {
  const { postCommonTrip } = useActions();
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);

  const [distance, setDistance] = useState<string>('0');

  const [tripData, setTripData] = useState({
    vehicle_type: 'petrol_car',
    round_trip: false,
    distance: 0,
  });

  const changeDistance = (e: string) => {
    setDistance(e);
    setTripData({
      vehicle_type: tripData.vehicle_type,
      round_trip: tripData.round_trip,
      distance: parseFloat(e || '0'),
    });
  };

  const switchPetrol = () => {
    setTripData({
      vehicle_type: 'petrol_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
  };

  const switchDiesel = () => {
    setTripData({
      vehicle_type: 'diesel_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
  };

  const switchElectric = () => {
    setTripData({
      vehicle_type: 'electric_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
  };

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
          SVG CAR
        </Text>
      </Box>
      <Box style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          variant={tripData.vehicle_type === 'petrol_car' ? 'primary' : 'default'}
          label="Petrol"
          onPress={switchPetrol}
          style={styles.Button}
        />
        <Button
          variant={tripData.vehicle_type === 'diesel_car' ? 'primary' : 'default'}
          label="Diesel"
          onPress={switchDiesel}
          style={styles.Button}
        />
        <Button
          variant={tripData.vehicle_type === 'electric_car' ? 'primary' : 'default'}
          label="Electric"
          onPress={switchElectric}
          style={styles.Button}
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
          Distance in Km
        </Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            margin: 12,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
          onChangeText={changeDistance}
          placeholder={'0'}
          keyboardType="numeric"
        />
        <Checkbox
          label="Round Trip ?"
          checked={tripData.round_trip}
          onChange={() =>
            setTripData({
              vehicle_type: tripData.vehicle_type,
              round_trip: !tripData.round_trip,
              distance: tripData.distance,
            })
          }
        />
      </Box>
      {isLoading ? (
        <Button
          variant="primary"
          label={<ActivityIndicator />}
          onPress={() => postCommonTrip(tripData)}
        />
      ) : (
        <Button variant="primary" label="Add Trip" onPress={() => postCommonTrip(tripData)} />
      )}
      <Button variant="default" label="Go Back" onPress={() => navigation.goBack()} />
    </Box>
  );
};

export default NewCarTrip;
