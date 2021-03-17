import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import { Text } from '../components/Theme';

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
        <SlideFood />
      </View>
      <View style={{ width }}>
        <SlideEnergy />
      </View>
      <View style={{ width }}>
        <Text variant="title2">Slide 3</Text>
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;
