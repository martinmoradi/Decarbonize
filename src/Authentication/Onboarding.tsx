import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { AuthNavigationProps } from '../components/Navigation';
import SlideTop from '../components/Onboarding/Slide/SlideTop';
import { Text } from '../components/Theme';

const OnboardingScreen = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const { width, height } = Dimensions.get('window');
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#A9EFD2',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <SlideTop text="FOOD" />
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={{flex:1, width: Dimensions.get('screen').width}}
        >
         
          <View style={{flex:1, width: Dimensions.get('screen').width}}>
          {/* <SlideTop text="FOOD" /> */}
          <Text variant="title2">Slide 1</Text>
          </View>

          <View style={{flex:1, width: Dimensions.get('screen').width}}>
          {/* <SlideTop text="ENERGY" /> */}
          <Text variant="title2">Slide 2</Text>
          </View>

          <View style={{flex:1, width: Dimensions.get('screen').width}}>
            {/* <SlideTop text="HABIT" />  */}
            <View style={{backgroundColor:'red'}}>
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
