import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Box, Button } from '../../components';
import MapView from 'react-native-maps';
import { TextInput } from '../../components';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
});

const NewCarTripScreen = ({ navigation }) => {
  const [location, setLocation] = React.useState({ latitude: 46.232193, longitude: 2.209667 });

  const permissionFlow = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }
    const position = await Location.getCurrentPositionAsync({});
    if (!position) {
      throw new Error('Location not found');
    }
    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  };

  useEffect(() => {
    permissionFlow();
  }, []);

  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={2} borderBottomRightRadius="xl" alignItems="center" justifyContent="center"></Box>
      <Box flex={0.5} borderTopLeftRadius="xl">
        <Box
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <TextInput icon="map-pin" />
          <Button
            variant="primary"
            label="Let's go !"
            onPress={() => navigation.navigate('Onboarding')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewCarTripScreen;
