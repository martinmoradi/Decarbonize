import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodBox from './FoodBox';
import { Box, Text } from '../../../components/';

const Meals = () => {
  return (
    <Box style={styles.boxStyle}>
      <Text variant="body">Tell us here what you have eaten this month.</Text>
      <View style={styles.lineContainer}>
        <FoodBox type={'red_meat'} />
        <FoodBox type={'white_meat'} />
      </View>
      <View style={styles.lineContainer}>
        <FoodBox type={'vegetarian'} />
        <FoodBox type={'vegan'} />
      </View>
    </Box>
  );
};
export default Meals;
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
});
