import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions, ScrollView, View, Image, StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../../components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TripStackNavigationProps } from '../../routers/NavigationTypes';

const NewTrip = ({ navigation }: TripStackNavigationProps<'NewTrip'>) => {
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
          style={styles.boxContainer}
          backgroundColor="primary"
          marginBottom="s"
        >
          <Text variant="title2" color="white">
            ADD A NEW TRIP
          </Text>
        </Box>
        <View style={styles.viewContainer}>
          <Image
            source={require('../../../assets/images/transportation.jpg')}
            style={styles.imgStyle}
          />
        </View>
        <Box
          paddingTop="m"
          style={styles.boxTravel}
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
            Pick your way of transportation:
          </Text>
          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCarTrip')}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/car.jpg')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Car (Electric, Diesel, Petrol)</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip', { type: 'metro' })}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/subway.jpg')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Subway</Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip', { type: 'bus' })}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/bus.jpg')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Bus </Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>

          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip', { type: 'train' })}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/train.jpg')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Train </Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewAirTrip')}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/airplane.png')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button" textAlign="center">
                    Airplane{' '}
                  </Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxTravelMode}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <BorderlessButton
              style={{ width: width }}
              onPress={() => navigation.navigate('NewCommonTrip', { type: 'tramway' })}
            >
              <View style={styles.cardContainer}>
                <Image
                  source={require('../../../assets/images/tramway.jpg')}
                  style={styles.iconStyle}
                />
                <View style={{ marginLeft: wp('5%') }}>
                  <Text variant="button">Tramway </Text>
                </View>
              </View>
            </BorderlessButton>
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  boxContainer: {
    width: width,
    height: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  viewContainer: {
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
  },
  imgStyle: {
    height: 120,
    width: wp('90%'),
    borderRadius: 15,
  },
  iconStyle: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  boxTravel: {
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  boxTravelMode: {
    width: wp('90%'),
    height: 80,
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  cardContainer: {
    marginLeft: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default NewTrip;
