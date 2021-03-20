import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import IconSvg from '../../../../assets/icons/IconSvg';

const SlideFood = ({ onPress }: PropsSlide) => {
  const { food } = useContext(OnboardingContext);
  const { whiteMeat, onChangeBreakfast, onChangeRedMeat, onChangeWhiteMeat } = food;

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
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },
    buttonStyle: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
    },
    btnContainer: {
      borderWidth: 0,
    },
    title: {
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        {
          translateY:
            Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - height / 1.3) / 2,
        },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 30 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const [breakfastValue, setBreakfastValue] = useState<number>(0);
  const [redMeatValue, setRedMeatValue] = useState<number>(0);
  const [whiteMeatValue, setWhiteMeatValue] = useState<number>(0);

  return (
    <View style={styles.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={false} />

      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you have a breakfast ?
          </Text>
          <Text variant="body">{breakfastValue} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={7}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setBreakfastValue}
            onSlidingComplete={onChangeBreakfast}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={breakfastValue}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat red meat ?
          </Text>
          <Text variant="body">{redMeatValue} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setRedMeatValue}
            onSlidingComplete={onChangeRedMeat}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={redMeatValue}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat white meat ?
          </Text>
          <Text variant="body">{whiteMeatValue} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setWhiteMeatValue}
            onSlidingComplete={onChangeWhiteMeat}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={whiteMeat}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideFood;
