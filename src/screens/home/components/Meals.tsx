import React from 'react';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Text, useTheme } from '../../../components/';
import FoodBox from './FoodBox';
const Meals = () => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      style={styles.boxInfo}
      backgroundColor="lightgray"
      paddingTop="l"
      paddingBottom="xl"
      marginTop="m"
    >
      <Text variant="titleCard" marginTop="s" marginBottom="s" style={{ color: theme.colors.text }}>
        My monthly <Text color="primary">alimentation</Text>
      </Text>
      <Box style={styles.boxStyle}>
        <Text variant="body" style={{ marginBottom: hp('2%'), textAlign: 'center' }}>
          Get more precise data by adding your meals here
        </Text>
        <Box style={styles.lineContainer}>
          <FoodBox type={'red_meat'} />
          <FoodBox type={'white_meat'} />
        </Box>
        <Box style={styles.lineContainer}>
          <FoodBox type={'vegetarian'} />
          <FoodBox type={'vegan'} />
        </Box>
      </Box>
    </Box>
  );
};
export default Meals;

const styles = StyleSheet.create({
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
    height: hp('75%'),
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
