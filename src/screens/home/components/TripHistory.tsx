import React, { useEffect, useState, useCallback } from 'react';
import { Box, Text } from '../../../components/Theme';
import { StyleSheet, Dimensions, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width } = Dimensions.get('window');

interface TripHistoryProps {
  type: string;
  distance: number;
  amount: number;
  date: string;
}

const TripHistory = ({ type, distance, amount, date }: TripHistoryProps) => {
  const [version, setVersion] = useState({
    image: require('../../../../assets/images/van.png'),
    color: 'lightgray',
  });

  const setImage = useCallback(
    (type: string) => {
      switch (type) {
        case 'electric_car':
        case 'petrol_car':
        case 'diesel_car':
          setVersion({ image: require('../../../../assets/images/van.png'), color: '#003f5c' });
          return;
        case 'bus':
          setVersion({ image: require('../../../../assets/images/autobus.png'), color: '#ff6361' });
          return;
        case 'metro':
          setVersion({
            image: require('../../../../assets/images/metro.png'),
            color: '#9d02d7',
          });
          return;
        case 'train':
          setVersion({
            image: require('../../../../assets/images/tramway.png'),
            color: '#bc5090',
          });
          return;
        case 'tramway':
          setVersion({
            image: require('../../../../assets/images/tramway.png'),
            color: '#0000ff',
          });
          return;
        default:
          setVersion({
            image: require('../../../../assets/images/airplanejourney.png'),
            color: '#58508d',
          });
          return;
      }
    },
    [type, setVersion]
  );

  useEffect(() => {
    setImage(type);
  }, [type]);

  return (
    <Box style={styles.boxContainer} justifyContent="center" marginBottom="s">
      <Box style={styles.viewContainer}>
        <Box style={{ marginLeft: wp('5%') }}>
          <Text variant="body">{new Date(Date.parse(date)).toLocaleDateString()}</Text>
        </Box>
        <Box style={[styles.viewImg, { backgroundColor: version.color }]}>
          <Image
            source={version.image}
            style={[styles.imgStyle, { backgroundColor: version.color }]}
          />
        </Box>
        <Text variant="body" style={{ marginLeft: wp('3%') }}>
          {distance}km
        </Text>
        <Text variant="body" style={{ marginLeft: 'auto', marginRight: wp('5%') }}>
          + {amount}kg
        </Text>
      </Box>
    </Box>
  );
};

export default TripHistory;

const styles = StyleSheet.create({
  boxStyle: {
    width: width,
    height: 80,
    borderBottomWidth: 2,
  },
  boxContainer: {
    marginHorizontal: wp('2%'),
    height: hp('8%'),
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
  textContainer: { marginLeft: wp('5%') },
  viewContainer: { flexDirection: 'row', alignItems: 'center' },
  viewImg: {
    marginLeft: wp('5%'),
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});
