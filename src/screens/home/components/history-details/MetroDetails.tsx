import React, { useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box } from '../../../../components/Theme';
import { useTypedSelector } from '../../../../hooks';
import Grid from './Grid';

const MetroDetails = () => {
  const { data } = useTypedSelector(state => state.emissions);
  const {
    total_metro_emissions,
    yearly_metro_emissions,
    monthly_metro_emissions,
    weekly_metro_emissions,
  } = data;

  const metroData = useMemo(
    () => [
      ['This week:', `${weekly_metro_emissions} kg`],
      ['This month:', `${monthly_metro_emissions} kg`],
      ['This year:', `${yearly_metro_emissions} kg`],
      ['Grand total:', `${total_metro_emissions} kg`],
    ],
    [weekly_metro_emissions, monthly_metro_emissions, yearly_metro_emissions, total_metro_emissions]
  );
  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewImg}>
        <Image source={require('../../../../../assets/images/metro.png')} style={styles.imgStyle} />
      </View>
      <View style={{ marginLeft: 'auto' }}>{Grid(metroData)}</View>
    </Box>
  );
};

export default MetroDetails;

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
    backgroundColor: '#9d02d7',
    position: 'absolute',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 96, width: 96, tintColor: 'white' },
});
