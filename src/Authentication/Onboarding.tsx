//@ts-nocheck
import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import SlideHousing from '../components/Onboarding/Slide/SlideHousing/SlideHousing';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width } = Dimensions.get('window');

  return (
    <ScrollView
      snapToInterval={width}
      decelerationRate="fast"
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ width }}>
        <SlideFood onPress={() => scrollTo({ x: 1, animated: true })} />
      </View>
      <View style={{ width }}>
        <SlideEnergy />
      </View>
      <View style={{ width }}>
        <SlideHousing />
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
