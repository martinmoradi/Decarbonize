import React, { useState, useEffect, useCallback } from 'react';
import { Box, Text, useTheme } from '../../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';

interface TransportationCardProps {
  navigation: TripStackNavigationProps<'NewTrip'>;
  variant: string;
}

const TransportationCard = ({ navigation, variant }: TransportationCardProps) => {
  const [imageUrl, setImageUrl] = useState({
    image: require('../../../../assets/images/van.png'),
  });

  const setImage = useCallback(() => {
    switch (variant) {
      case 'car':
        setImageUrl({ image: require('../../../../assets/images/van.png') });
        break;
      case 'metro':
        setImageUrl({ image: require('../../../../assets/images/metro.png') });
      case 'train':
        setImageUrl({ image: require('../../../../assets/images/train.png') });
        break;
      case 'plane':
        setImageUrl({ image: require('../../../../assets/images/airplanejourney.png') });
        break;
      case 'tramway':
        setImageUrl({ image: require('../../../../assets/images/tramway.png') });
        break;
      case 'bus':
        setImageUrl({ image: require('../../../../assets/images/autobus.png') });
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
      marginTop="s"
      style={styles.boxTravelMode}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <BorderlessButton style={{ width: wp(100) }} onPress={() => navigate()}>
        <Box style={styles.cardContainer}>
          <Image source={imageUrl.image} style={styles.iconStyle} />
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
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  iconStyle: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  cardContainer: {
    marginLeft: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
