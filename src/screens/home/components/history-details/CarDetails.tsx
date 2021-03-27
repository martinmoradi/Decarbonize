import React, { useMemo } from 'react';
import { Box } from '../../../../components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../../../hooks';
import Grid from './Grid';

const CarDetails = () => {
  const { data } = useTypedSelector(state => state.emissions);
  const {
    total_car_emissions,
    yearly_cars_emissions,
    monthly_cars_emissions,
    weekly_cars_emissions,
  } = data;

  const carData = useMemo(
    () => [
      ['This week:', `${weekly_cars_emissions} kg`],
      ['This month:', `${monthly_cars_emissions} kg`],
      ['This year:', `${yearly_cars_emissions} kg`],
      ['Grand total:', `${total_car_emissions} kg`],
    ],
    [weekly_cars_emissions, monthly_cars_emissions, yearly_cars_emissions, total_car_emissions]
  );

  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewImg}>
        <Image source={require('../../../../../assets/images/van.png')} style={styles.imgStyle} />
      </View>
      <View style={{ marginLeft: 'auto' }}>{Grid(carData)}</View>
    </Box>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  boxContainer: {
    width: wp('90%'),
    flex: 1,
    height: hp('25%'),
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
    backgroundColor: '#003f5c',
    position: 'absolute',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 96, width: 96, tintColor: 'white' },
});
