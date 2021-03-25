import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodBox from './FoodBox';

const Meals = () => {
  return (
    <View>
      <View style={s.lineContainer}>
        <FoodBox type={'red_meat'}  />
        <FoodBox type={'white_meat'} />
      </View>
      <View style={s.lineContainer}>
        <FoodBox type={'vegetarian'} />
        <FoodBox type={'vegan'} />
      </View>
    </View>
  );
};
export default Meals;
const s = StyleSheet.create({
  
    lineContainer: {flexDirection: 'row', marginBottom: 10}, 
    
  });