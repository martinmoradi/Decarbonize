import React, { useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box } from '../../../../components/Theme';
import { useTypedSelector } from '../../../../hooks';
import Grid from './Grid';

const TrainDetails = () => {
  const { data } = useTypedSelector(state => state.emissions);
  const {
    total_train_emissions,
    yearly_train_emissions,
    monthly_train_emissions,
    weekly_train_emissions,
  } = data;

  const trainData = useMemo(
    () => [
      ['This week:', `${weekly_train_emissions} kg`],
      ['This month:', `${monthly_train_emissions} kg`],
      ['This year:', `${yearly_train_emissions} kg`],
      ['Grand total:', `${total_train_emissions} kg`],
    ],
    [weekly_train_emissions, monthly_train_emissions, yearly_train_emissions, total_train_emissions]
  );

  return (
    <Box
      style={styles.boxContainer}
      justifyContent="center"
      backgroundColor="lightgray"
      borderBottomColor="white"
    >
      <View style={styles.viewImg}>
        <Image source={require('../../../../../assets/images/train.png')} style={styles.imgStyle} />
      </View>
      <View style={{ marginLeft: 'auto' }}>{Grid(trainData)}</View>
    </Box>
  );
};

export default TrainDetails;

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
    backgroundColor: '#bc5090',
    position: 'absolute',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 96, width: 96, tintColor: 'white' },
});
