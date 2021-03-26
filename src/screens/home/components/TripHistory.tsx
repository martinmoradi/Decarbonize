import React, { useEffect, useState } from 'react';
import { Box, Text } from '../../../components/Theme';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
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

const TripHistory = (props: TripHistoryProps) => {
  const [version, setVersion] = useState({
    image: require('../../../../assets/images/van.png'),
    color: 'lightgray',
  });

  const setImage = (name: string) => {
    if (name === 'electric_car' || name === 'petrol_car' || name === 'diesel_car') {
      setVersion({ image: require('../../../../assets/images/van.png'), color: '#39D697' });
    } else if (name === 'bus') {
      setVersion({ image: require('../../../../assets/images/autobus.png'), color: '#FF0058' });
    } else if (name === 'metro') {
      setVersion({ image: require('../../../../assets/images/metro.png'), color: 'orange' });
    } else if (name === 'train') {
      setVersion({ image: require('../../../../assets/images/train.png'), color: 'blue' });
    } else if (name === 'tramway') {
      setVersion({ image: require('../../../../assets/images/tramway.png'), color: '#808080' });
    } else {
      setVersion({
        image: require('../../../../assets/images/airplanejourney.png'),
        color: '#FFC641',
      });
    }
  };

  const setIImage = (name: string) => {
    switch (name) {
      case 'electric_car':
      case 'petrol_car':
    }
  };

  useEffect(() => {
    setImage(props.type);
  }, []);

  return (
    <Box style={styles.boxContainer} justifyContent="center" marginBottom="s">
      <View style={styles.viewContainer}>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">{new Date(Date.parse(props.date)).toLocaleDateString()}</Text>
        </View>
        <View style={[styles.viewImg, { backgroundColor: version.color }]}>
          <Image
            source={version.image}
            style={[styles.imgStyle, { backgroundColor: version.color }]}
          />
        </View>
        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="body">{props.distance}km</Text>
        </View>

        <View style={{ marginLeft: wp('5%') }}>
          <Text variant="header">+ {props.amount}kg Co2</Text>
        </View>
      </View>
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
  viewContainer: { flexDirection: 'row', alignItems: 'center' },
  viewImg: {
    marginLeft: wp('5%'),
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 24, width: 24, tintColor: 'white' },
});
