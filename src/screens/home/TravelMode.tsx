import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from '../../components';

export type PropsTravel = {
  travelMode: string;
  imgUrl: ImageSourcePropType;
};

const TravelMode = ({ travelMode, imgUrl }: PropsTravel) => {
  const images = {
    car: require('../../../assets/images/car.jpg'),
  };
  return (
    <View
      style={{
        marginLeft: wp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image source={imgUrl} style={{ height: 70, width: 70, borderRadius: 15 }} />
      <View style={{ marginLeft: wp('5%') }}>
        <Text variant="button">{travelMode}</Text>
      </View>
    </View>
  );
};

export default TravelMode;
