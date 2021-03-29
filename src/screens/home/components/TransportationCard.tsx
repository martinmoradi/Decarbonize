import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Box, Text } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';

interface TransportationCardProps {
  navigation: TripStackNavigationProps<'NewTrip'>;
  variant: string;
}

const TransportationCard = ({ navigation, variant }: TransportationCardProps) => {
  const [imageVersion, setImageVersion] = useState({
    image: require('../../../../assets/images/metro.png'),
    color: '#003f5c',
  });

  const setImage = useCallback(() => {
    switch (variant) {
      case 'car':
        setImageVersion({
          image: require('../../../../assets/images/van.png'),
          color: '#003f5c',
        });
        break;
      case 'metro':
        setImageVersion({
          image: require('../../../../assets/images/metro.png'),
          color: '#9d02d7',
        });
        break;
      case 'train':
        setImageVersion({
          image: require('../../../../assets/images/train.png'),
          color: '#bc5090',
        });
        break;
      case 'plane':
        setImageVersion({
          image: require('../../../../assets/images/airplanejourney.png'),
          color: '#58508d',
        });
        break;
      case 'tramway':
        setImageVersion({
          image: require('../../../../assets/images/tramway.png'),
          color: '#0000ff',
        });
        break;
      case 'bus':
        setImageVersion({
          image: require('../../../../assets/images/autobus.png'),
          color: '#ff6361',
        });
        break;
      default:
    }
  }, [variant]);

  const navigate = useCallback(() => {
    switch (variant) {
      case 'car':
        navigation.navigate('NewCarTrip');
        break;
      case 'metro':
        navigation.navigate('NewCommonTrip', { type: 'metro' });
        break;
      case 'train':
        navigation.navigate('NewCommonTrip', { type: 'train' });
        break;
      case 'plane':
        navigation.navigate('NewAirTrip');
        break;
      case 'tramway':
        navigation.navigate('NewCommonTrip', { type: 'tramway' });
        break;
      case 'bus':
        navigation.navigate('NewCommonTrip', { type: 'bus' });
        break;
      default:
        return;
    }
  }, [variant]);

  useEffect(() => {
    setImage();
  }, [variant]);

  const capitalize = (variant: string) => {
    return variant.charAt(0).toUpperCase() + variant.slice(1);
  };

  return (
    <Box
      alignItems="center"
      marginBottom="m"
      style={styles.boxTravelMode}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <BorderlessButton style={{ width: wp(100) }} onPress={() => navigate()}>
        <Box style={styles.cardContainer}>
          <Box style={[styles.viewImg, { backgroundColor: imageVersion.color }]}>
            <Image source={imageVersion.image} style={styles.iconStyle} />
          </Box>
          <Box style={{ marginLeft: wp('5%') }}>
            <Text variant="button">{capitalize(variant)}</Text>
          </Box>
        </Box>
      </BorderlessButton>
    </Box>
  );
};

export default TransportationCard;

const styles = StyleSheet.create({
  boxTravelMode: {
    width: wp('90%'),
    height: 80,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    shadowColor: '#616164',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  iconStyle: {
    height: 48,
    width: 48,
    borderRadius: 15,
    tintColor: 'white',
  },
  viewImg: {
    marginLeft: wp('5%'),
    padding: 5,
    borderRadius: 10,
  },
  cardContainer: {
    marginLeft: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
