import React, { useContext, useRef, useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, View, StyleSheet } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from './Slide/SlideEnergy/SlideEnergy';
import SlideEnergySecond from './Slide/SlideEnergy/SlideEnergySecond';
import SlideEnergyThird from './Slide/SlideEnergy/SlideEnergyThird';
import SlideFood from './Slide/SlideFood/SlideFood';
import SlideFoodSecond from './Slide/SlideFood/SlideFoodSecond';
import SlideHousing from './Slide/SlideHousing/SlideSpending';
import OnboardingContext from './onboardingContext/OnboardingContext';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width } = Dimensions.get('window');
  const scroll = useRef<FlatList>(null);
  const { energy } = useContext(OnboardingContext);
  const { woodHeating, fuelHeating, gasHeating } = energy;

  const styles = StyleSheet.create({
    slide: {
      width,
    },
  });

  const slides = [
    <SlideFood onPress={() => scroll.current?.scrollToIndex({ index: 1 })} />,
    <SlideFoodSecond onPress={() => scroll.current?.scrollToIndex({ index: 2 })} />,
    <SlideEnergy onPress={() => scroll.current?.scrollToIndex({ index: 3 })} />,
    <SlideEnergySecond onPress={() => scroll.current?.scrollToIndex({ index: 4 })} />,
    <SlideEnergyThird onPress={() => scroll.current?.scrollToIndex({ index: 5 })} />,
    <SlideHousing onPress={() => navigation.navigate('SignUp')} />,
  ];

  const has_not_renewable = woodHeating || fuelHeating || gasHeating;

  return (
    <FlatList
      data={slides}
      renderItem={({ item, index }) => {
        if (index === 4 && !has_not_renewable) {
          return <></>;
        } else {
          return <View style={styles.slide}>{item}</View>;
        }
      }}
      horizontal
      removeClippedSubviews
      pagingEnabled={true}
      keyExtractor={(item, index) => `key - ${index}${item}`}
      showsHorizontalScrollIndicator={false}
      ref={scroll}
    />
  );
};

export default OnboardingScreen;
