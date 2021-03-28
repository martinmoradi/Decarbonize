import React, { useMemo } from 'react';
import { Box } from '../../../../components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../../../hooks';
import Grid from './Grid';

const TramDetails = () => {
  const { data } = useTypedSelector(state => state.emissions);
  const {
    total_tramway_emissions,
    yearly_tramway_emissions,
    monthly_tramway_emissions,
    weekly_tramway_emissions,
  } = data;

  const tramwayData = useMemo(
    () => [
      ['This week:', `${weekly_tramway_emissions} kg`],
      ['This month:', `${monthly_tramway_emissions} kg`],
      ['This year:', `${yearly_tramway_emissions} kg`],
      ['Grand total:', `${total_tramway_emissions} kg`],
    ],
    [
      weekly_tramway_emissions,
      monthly_tramway_emissions,
      yearly_tramway_emissions,
      total_tramway_emissions,
    ]
  );

  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewImg}>
        <Image
          source={require('../../../../../assets/images/tramway.png')}
          style={styles.imgStyle}
        />
      </View>
      <View style={{ marginLeft: 'auto' }}>{Grid(tramwayData)}</View>
    </Box>
  );
};

export default TramDetails;

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
    backgroundColor: '#0000ff',
    position: 'absolute',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 96, width: 96, tintColor: 'white' },
});
