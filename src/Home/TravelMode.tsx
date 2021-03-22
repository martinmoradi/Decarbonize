import React from 'react';
import { View, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Text } from '../components';

export type PropsTravel = {
  travelMode: string;
  imgUrl: string;
};

const TravelMode = ({ travelMode, imgUrl }: PropsTravel) => {
  const images = {
    car: require('../../assets/images/car.jpg'),
  };
  return (
    <View
      style={{
        marginLeft: wp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={images.car} style={{ height: 70, width: 70, borderRadius: 15 }} />
      <View style={{ marginLeft: wp('5%') }}>
        <Text variant="button">{travelMode}</Text>
      </View>
    </View>
  );
};

export default TravelMode;
