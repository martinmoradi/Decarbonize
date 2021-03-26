import React, { useRef, useMemo, useCallback } from 'react';
import { Dimensions, FlatList, View, StyleSheet } from 'react-native';
import { AuthNavigationProps } from '../../../routers/NavigationTypes';
import SlideEnergy from './energy/SlideEnergy';
import SlideEnergySecond from './energy/SlideEnergySecond';
import SlideEnergyThird from './energy/SlideEnergyThird';
import SlideFood from './food/SlideFood';
import SlideFoodSecond from './food/SlideFoodSecond';
import SlideHousing from './spending/SlideSpending';
import { useTypedSelector } from '../../../hooks';

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
      <SlideFood onPress={() => slidePress(1)} goBack={()=> navigation.goBack()} />,
      <SlideFoodSecond onPress={() => slidePress(2)} goBack={()=> slidePress(0)}/>,
      <SlideEnergy onPress={() => slidePress(3)} goBack={()=> slidePress(1)}/>,
      <SlideEnergySecond onPress={() => slidePress(4)} goBack={()=> slidePress(2)}/>,
      <SlideEnergyThird onPress={() => slidePress(5)} goBack={()=> slidePress(3)}/>,
      <SlideHousing onPress={() => navigation.navigate('SignUp')} goBack={()=> slidePress(3)}/>,
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
