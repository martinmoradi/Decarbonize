//@ts-nocheck
import React, { useRef } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideEnergySecond from '../components/Onboarding/Slide/SlideEnergy/SlideEnergySecond';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import SlideHousing from '../components/Onboarding/Slide/SlideHousing/SlideHousing';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width } = Dimensions.get('window');
  const scroll = useRef<ScrollView>(null);

  return (
    <ScrollView
      snapToInterval={width}
      decelerationRate="fast"
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scroll}
    >
      <View style={{ width }}>
        <SlideFood onPress={() => scroll.current.scrollTo({ x: width * 1, animated: true })} />
      </View>
      <View style={{ width }}>
        <SlideEnergy onPress={() => scroll.current.scrollTo({ x: width * 2, animated: true })} />
      </View>
      <View style={{ width }}>
        <SlideEnergySecond
          onPress={() => scroll.current.scrollTo({ x: width * 3, animated: true })}
        />
      </View>
      <View style={{ width }}>
        <SlideHousing onPress={() => scroll.current.scrollTo({ x: width * 4, animated: true })} />
      </View>
      <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Welcome')}
          label="Go to Welcome"
          variant="primary"
        />
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;
