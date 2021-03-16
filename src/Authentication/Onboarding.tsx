import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideEnergy from '../components/Onboarding/Slide/SlideEnergy/SlideEnergy';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import SlideTop from '../components/Onboarding/Slide/SlideTop';
import { Text } from '../components/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // underlay: {
  //   height: 0.61 * height,
  //   borderBottomRightRadius: 75,
  // },
});

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <SlideTop />
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{ flex: 1, width: Dimensions.get('screen').width }}
      >
        <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
          <SlideFood />
        </View>

        <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
          <SlideEnergy />
        </View>

        <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
          <Text variant="title2">Slide 3</Text>
        </View>
      </ScrollView>
      {/* <Button title="go to Auth" onPress={() => navigation.navigate('Auth')} /> */}
    </View>
  );
};

export default OnboardingScreen;
