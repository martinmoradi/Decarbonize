//@ts-nocheck
import React, { useRef } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button, Text } from '../components';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideEnergySecond from '../components/Onboarding/Slide/SlideEnergy/SlideEnergySecond';
import SlideEnergyThird from '../components/Onboarding/Slide/SlideEnergy/SlideEnergyThird';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import SlideFood2 from '../components/Onboarding/Slide/SlideFood/SlideFood2';
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
        <SlideFood2 onPress={() => scroll.current.scrollTo({ x: width * 2, animated: true })} />
      </View>
      <View style={{ width }}>
        <SlideEnergy onPress={() => scroll.current.scrollTo({ x: width * 3, animated: true })} />
      </View>
      <View style={{ width }}>
        <SlideEnergySecond
          onPress={() => scroll.current.scrollTo({ x: width * 4, animated: true })}
        />
      </View>
      <View style={{ width }}>
        <SlideEnergyThird
          onPress={() => scroll.current.scrollTo({ x: width * 5, animated: true })}
        />
      </View>
      <View style={{ width }}>
        <SlideHousing onPress={() => scroll.current.scrollTo({ x: width * 6, animated: true })} />
      </View>
      <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant="title1" style={{ marginBottom: 20 }}>
          Great !
        </Text>
        <Text variant="body" textAlign="center" style={{ margin: 30 }}>
          Your answers will be added to your profile as fixed emissions.
        </Text>
        <Text variant="body" textAlign="center" style={{ marginLeft: 30, marginRight: 30 }}>
          Are you sure you want to create your account with these informations ?
        </Text>
        <Text
          variant="body"
          textAlign="center"
          style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}
        >
          (You can always change them later)
        </Text>
        <Button onPress={() => navigation.navigate('SignUp')} label="YES" variant="primary" />
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;
