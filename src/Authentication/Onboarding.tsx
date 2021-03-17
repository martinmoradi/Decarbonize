import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Button } from '../components';
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
      <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="title1" style={{ marginBottom: 20 }}> Great !</Text>
      <Text variant="body" textAlign="center" style={{ margin: 30}}>Your answers will be added to your profile as fixed emissions. </Text>
      <Text variant="body" textAlign="center" style={{ marginLeft: 30, marginRight: 30}}> Are you sure you want to create your account with these informations ?</Text>
      <Text variant="body" textAlign="center" style={{ marginBottom: 30, marginLeft: 30, marginRight: 30}}>(You can always change them later)</Text>
<Button
          onPress={() => navigation.navigate('SignUp')}
          label="YES"
          variant="primary"
        />
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;
