import React, { useRef, useMemo, useCallback, useState } from 'react';
import { Dimensions, FlatList, View, StyleSheet } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from './Slide/SlideEnergy/SlideEnergy';
import SlideEnergySecond from './Slide/SlideEnergy/SlideEnergySecond';
import SlideEnergyThird from './Slide/SlideEnergy/SlideEnergyThird';
import SlideFood from './Slide/SlideFood/SlideFood';
import SlideFoodSecond from './Slide/SlideFood/SlideFoodSecond';
import SlideHousing from './Slide/SlideHousing/SlideSpending';
import { useTypedSelector } from '../hooks';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { energy } = useTypedSelector(state => state.onboarding);
  const { isWoodHeating, isFuelHeating, isGasHeating } = energy;
  const isFossil = isWoodHeating || isFuelHeating || isGasHeating;

  const scroll = useRef<FlatList>(null);

  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    slide: {
      width,
    },
  });

  const slidePress = useCallback(
    (index: number) => {
      scroll.current?.scrollToIndex({ index });
    },
    [scroll]
  );
  const slides = useMemo(
    () => [
      <SlideFood onPress={() => slidePress(1)} />,
      <SlideFoodSecond onPress={() => () => slidePress(2)} />,
      <SlideEnergy onPress={() => () => slidePress(2)} />,
      <SlideEnergySecond onPress={() => slidePress(3)} />,
      <SlideEnergyThird onPress={() => slidePress(3)} />,
      <SlideHousing onPress={() => navigation.navigate('SignUp')} />,
    ],
    [navigation, slidePress]
  );

  return (
    <FlatList
      data={slides}
      renderItem={({ item, index }) => {
        if (index === 4 && !isFossil) {
          return null;
        } else {
          return <View style={styles.slide}>{item}</View>;
        }
      }}
      horizontal
      scrollEnabled={false}
      removeClippedSubviews
      pagingEnabled={true}
      decelerationRate="normal"
      keyExtractor={(item, index) => `key - ${index}${item}`}
      showsHorizontalScrollIndicator={false}
      ref={scroll}
    />
  );
};

export default OnboardingScreen;
