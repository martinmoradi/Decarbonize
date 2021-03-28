import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Meals from './components/Meals';
import FoodBox from './components/FoodBox';

const MealsScreen = () => {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.secondary, flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
          minHeight: hp(100),
        }}
      ></Box>
      <Box marginBottom="xl" marginTop="xl">
        <Meals />
      </Box>
      <ScrollView></ScrollView>
    </Box>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  h2: {
    color: 'rgba(54, 54, 83, 0.7)',
  },
  lineContainer: { flexDirection: 'row', marginBottom: wp('5%') },
  boxStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  boxInfo: {
    width: wp('100%'),
    height: hp('100%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
});
