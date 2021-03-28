import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../../components';
import { TripStackNavigationProps } from '../../routers/NavigationTypes';
import TransportationCard from './components/TransportationCard';

const NewTrip = ({ navigation }: TripStackNavigationProps<'NewTrip'>) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>

      <Box marginTop="xl" />
      <Box
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginBottom: 50,
          minHeight: hp('100%'),
        }}
      >
        <Box style={{ alignItems: 'center', flex: 1 }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={{ textAlign: 'center' }}>
            Select a <Text color="primary">transportation</Text>
          </Text>
          <ScrollView>
            <TransportationCard variant={'car'} navigation={navigation} />
            <TransportationCard variant={'bus'} navigation={navigation} />
            <TransportationCard variant={'train'} navigation={navigation} />
            <TransportationCard variant={'plane'} navigation={navigation} />
            <TransportationCard variant={'tramway'} navigation={navigation} />
            <Box style={{ marginBottom: 160 }}>
              <TransportationCard variant={'metro'} navigation={navigation} />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </Box>
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
    height: 130,
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
