import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import FoodBox from './FoodBox';
import { Box, Text, useTheme } from '../../../components/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Meals = () => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      style={styles.boxInfo}
      backgroundColor="lightgray"
      paddingTop="xl"
      marginTop="m"
    >
      <Text
        variant="title2"
        marginBottom="m"
        style={{ color: theme.colors.secondary, marginTop: hp('-3%') }}
      >
        Your monthly <Text color="primary">alimentation</Text>
      </Text>
      <Box style={styles.boxStyle}>
        <Text variant="body" style={{ marginBottom: hp('2%') }}>
          Tell us here what you have eaten this month.
        </Text>
        <View style={styles.lineContainer}>
          <FoodBox type={'red_meat'} />
          <FoodBox type={'white_meat'} />
        </View>
        <View style={styles.lineContainer}>
          <FoodBox type={'vegetarian'} />
          <FoodBox type={'vegan'} />
        </View>
      </Box>
    </Box>
  );
};
export default Meals;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  lineContainer: { flexDirection: 'row', marginBottom: 10 },
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
    width: width,
    height: hp('65%'),
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
