import React from 'react';
import { Box, Text, useTheme } from '../../../components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../../hooks';

const CarHistory = () => {
  const theme = useTheme();
  const { data } = useTypedSelector(state => state.emissions);
  const {
    total_car_emissions,
    yearly_cars_emissions,
    monthly_cars_emissions,
    weekly_cars_emissions,
  } = data;

  return (
    <Box
      style={s.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={s.viewImg}>
        <Image source={require('../../../../assets/images/van.png')} style={s.imgStyle} />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <Text>This week</Text>
          <Text>{weekly_cars_emissions}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <Text>This month</Text>
          <Text>{monthly_cars_emissions}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <Text>This year</Text>
          <Text>{yearly_cars_emissions}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
          <Text>Grand total</Text>
          <Text>{total_car_emissions}</Text>
        </View>
      </View>
    </Box>
  );
};

const s = StyleSheet.create({
  boxContainer: {
    width: wp('90%'),
    height: hp('15%'),
    borderRadius: 20,
    shadowColor: '#616164',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewImg: {
    marginLeft: wp('5%'),
    backgroundColor: '#39D697',
    position: 'absolute',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 48, width: 48, tintColor: 'white' },
});
export default CarHistory;
