import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions, ScrollView, View, Image } from 'react-native';
import { Box, Text, TextButton } from '../components';
const { width } = Dimensions.get('window');
import { BorderlessButton } from 'react-native-gesture-handler';
import TravelMode from './TravelMode';

const NewTripScreen = ({ navigation }) => {
  const carImg = require('../../assets/images/car.jpg');

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={{
            width: width,
            height: 100,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
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
          marginBottom="s"
        >
          <Text variant="title2" color="white">
            NOUVEAU TRAJET
          </Text>
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
          <Text variant="title2" color="white">
            SVG
          </Text>
        </Box>
        <Box
          paddingTop="m"
          style={{ width: width, borderRadius: 30 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
        >
          <Text variant="button" margin="s">
            Choisis un moyen de transport:
          </Text>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCarTrip')}
            >
              <TravelMode travelMode="Car travel" imgUrl="carImg" />
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip')}
            >
              <Text variant="button">Bus</Text>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip')}
            >
              <Text variant="button">Metro</Text>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip')}
            >
              <Text variant="button">Train</Text>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewAirTrip')}
            >
              <Text variant="button">Avion</Text>
            </BorderlessButton>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default NewTripScreen;
