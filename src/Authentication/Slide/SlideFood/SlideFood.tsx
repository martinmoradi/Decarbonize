import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideFood = ({ onPress }: PropsSlide) => {
  const { food } = useContext(OnboardingContext);
  const { onChangeBreakfast, onChangeRedMeat, onChangeWhiteMeat } = food;

  const theme = useTheme();
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    btnContainer: {
      borderWidth: 0,
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const [breakfastValue, setBreakfastValue] = useState<number>(0);
  const [redMeatValue, setRedMeatValue] = useState<number>(0);
  const [whiteMeatValue, setWhiteMeatValue] = useState<number>(0);

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={false} />

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you have a breakfast ?
          </Text>
          <Text variant="body">{breakfastValue} / week</Text>
          <SliderOnboarding
            onValueChange={setBreakfastValue}
            onSlidingComplete={onChangeBreakfast}
            value={breakfastValue}
            step={1}
            maximumValue={7}
            minimumValue={0}
          />

          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat red meat ?
          </Text>
          <Text variant="body">{redMeatValue} / week</Text>
          <SliderOnboarding
            onValueChange={setRedMeatValue}
            onSlidingComplete={onChangeRedMeat}
            value={redMeatValue}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />

          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat white meat ?
          </Text>
          <Text variant="body">{whiteMeatValue} / week</Text>
          <SliderOnboarding
            onValueChange={setWhiteMeatValue}
            onSlidingComplete={onChangeWhiteMeat}
            value={whiteMeatValue}
            step={1}
            maximumValue={14}
            minimumValue={0}
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
