import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import { Text, useTheme } from '../components/Theme';
const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const theme = useTheme();

  const { height, width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slider: {
      height: height / 3,
    },
    footer: {
      flex: 1,
      borderTopLeftRadius: 100,
      backgroundColor: 'white',
    },
  });
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
