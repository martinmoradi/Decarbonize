import React, { useRef, useMemo, useCallback } from 'react';
import { Dimensions, FlatList, View, StyleSheet } from 'react-native';
import { AuthNavigationProps } from '../../routers/NavigationTypes';
import SlideEnergy from './onboarding-slides/energy/SlideEnergy';
import SlideEnergySecond from './onboarding-slides/energy/SlideEnergySecond';
import SlideEnergyThird from './onboarding-slides/energy/SlideEnergyThird';
import SlideFood from './onboarding-slides/food/SlideFood';
import SlideFoodSecond from './onboarding-slides/food/SlideFoodSecond';
import SlideHousing from './onboarding-slides/spending/SlideSpending';
import { useTypedSelector } from '../../hooks';

const Onboarding = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
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
      <SlideFoodSecond onPress={() => slidePress(2)} />,
      <SlideEnergy onPress={() => slidePress(3)} />,
      <SlideEnergySecond onPress={() => slidePress(4)} />,
      <SlideEnergyThird onPress={() => slidePress(5)} />,
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

export default Onboarding;