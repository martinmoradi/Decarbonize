import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideFood from '../components/Onboarding/Slide/SlideFood/SlideFood';
import SlideTop from '../components/Onboarding/Slide/SlideTop';
import { Text } from '../components/Theme';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A9EFD2',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  });
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
          <Text variant="title2">Slide 2</Text>
        </View>

        <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
          <View style={{ backgroundColor: 'red' }}>
            <Text variant="title2">Slide 3</Text>
          </View>
        </View>
      </ScrollView>

      <Text variant="title2">Slide test</Text>
      {/* <Button title="go to Auth" onPress={() => navigation.navigate('Auth')} /> */}
    </View>
  );
};

export default OnboardingScreen;
