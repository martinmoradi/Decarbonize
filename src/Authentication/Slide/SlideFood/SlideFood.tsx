import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, StyleSheet, View } from 'react-native';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';
import { useTypedSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingFoodActionType } from '../../../redux/types';

const SlideFood = ({ onPress }: PropsSlide) => {
  const theme = useTheme();
  const { food } = useTypedSelector(state => state.onboarding);
  const [breakfast, setBreakfast] = useState(food.breakfasts_per_week);
  const [redMeat, setRedMeat] = useState(food.red_meats_per_week);
  const [whiteMeat, setWhiteMeat] = useState(food.white_meats_per_week);
  const dispatch = useDispatch();

  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    btnContainer: {
      borderWidth: 0,
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const handlePress = () => {
    dispatch({ type: OnboardingFoodActionType.SET_BREAKFAST, payload: breakfast });
    dispatch({ type: OnboardingFoodActionType.SET_RED_MEAT, payload: redMeat });
    dispatch({ type: OnboardingFoodActionType.SET_WHITE_MEAT, payload: whiteMeat });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={false} />
      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you have a breakfast ?
          </Text>
          <Text variant="body">{breakfast} times per week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setBreakfast(value)}
            value={breakfast}
            step={1}
            maximumValue={7}
            minimumValue={0}
          />

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat red meat ?
          </Text>
          <Text variant="body">{redMeat} / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setRedMeat(value)}
            value={redMeat}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat white meat ?
          </Text>
          <Text variant="body">{whiteMeat} / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setWhiteMeat(value)}
            value={whiteMeat}
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
            bottom: hp('2.5%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideFood;
