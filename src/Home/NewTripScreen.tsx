import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions, ScrollView, View, Image, StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../components';
const { width } = Dimensions.get('window');
import { BorderlessButton } from 'react-native-gesture-handler';
import TravelMode from './TravelMode';
import { TripStackNavigationProps } from '../components/Navigation';

const NewTripScreen = ({ navigation }: TripStackNavigationProps<'NewTripScreen'>) => {
  const theme = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={{ alignItems: 'center', flex: 1 }}>
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
          }}
          backgroundColor="primary"
          marginBottom="s"
        >
          <Text variant="title2" color="white">
            NOUVEAU TRAJET
          </Text>
        </Box>
        <View
          style={{
            marginBottom: hp('2.5%'),
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('90%'),
            height: 120,
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
        >
          <Image
            source={require('../../assets/images/transportation.jpg')}
            style={{ height: 120, width: wp('90%'), borderRadius: 15 }}
          />
        </View>
        <Box
          paddingTop="m"
          style={{ width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
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
              onPress={() => navigation.navigate('NewCarTripScreen')}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/car.jpg')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Car Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTripScreen', { type: 'bus' })}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/bus.jpg')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Bus Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTripScreen', { type: 'tramway' })}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/tramway.jpg')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Tramway Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTripScreen', { type: 'metro' })}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/subway.jpg')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Subway Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTripScreen', { type: 'train' })}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/train.jpg')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Train Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={{ width: wp('90%'), height: 80, borderBottomWidth: 2, borderRadius: 20 }}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewAirTripScreen')}
            >
              <View
                style={{
                  marginLeft: wp('10%'),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../assets/images/airplane.png')}
                  style={{ height: 70, width: 70, borderRadius: 15 }}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Airplane Travel</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default NewTripScreen;
