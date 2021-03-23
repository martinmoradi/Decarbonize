import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Box, Text } from '../components';
const { width } = Dimensions.get('window');
import { BorderlessButton } from 'react-native-gesture-handler';
import { TripStackNavigationProps } from '../components/Navigation';

const NewTripScreen = ({ navigation }: TripStackNavigationProps<'NewTripScreen'>) => {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
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
          style={{ width: width, borderRadius: 20 }}
          justifyContent="center"
          backgroundColor="info"
        >
          <Text variant="title3" color="white" margin="s">
            Choisis un moyen de transport:
          </Text>
          <Box
            alignItems="center"
            style={{ width: width, height: 80, borderBottomWidth: 2 }}
            justifyContent="center"
            backgroundColor="primary"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCarTripScreen')}
            >
              <Text variant="button">Voiture</Text>
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
              onPress={() => navigation.navigate('NewCommonTripScreen', {type: "bus"})}
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
              onPress={() => navigation.navigate('NewCommonTripScreen', {type: "tramway"})}
            >
              <Text variant="button">Tramway</Text>
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
              onPress={() => navigation.navigate('NewCommonTripScreen', {type: "metro"})}
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
              onPress={() => navigation.navigate('NewCommonTripScreen',  {type: "train"})}
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
              onPress={() => navigation.navigate('NewAirTripScreen')}
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
