import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { Box, Text, useTheme } from '../../../../components/Theme';
import { useTypedSelector } from '../../../../hooks';
import { OnboardingFoodActionType } from '../../../../redux/types';
import { SliderOnboarding } from '../../components';
import SlideTitle from '../../components/TopSlide';
import { PropsSlide } from '../../types';

const SlideFood = ({ onPress }: PropsSlide) => {
  const theme = useTheme();
  const { food } = useTypedSelector(state => state.onboarding);
  const [breakfast, setBreakfast] = useState(food.breakfasts_per_week);
  const [redMeat, setRedMeat] = useState(food.red_meats_per_week);
  const [whiteMeat, setWhiteMeat] = useState(food.white_meats_per_week);

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch({ type: OnboardingFoodActionType.SET_BREAKFAST, payload: breakfast });
    dispatch({ type: OnboardingFoodActionType.SET_RED_MEAT, payload: redMeat });
    dispatch({ type: OnboardingFoodActionType.SET_WHITE_MEAT, payload: whiteMeat });
    onPress();
  };

  const generateText = (variant: 'redMeat' | 'breakfast' | 'whiteMeat') => {
    switch (variant) {
      case 'redMeat':
        if (redMeat === 0) {
          return (
            <Text variant="body">
              I <Text variant="bodyHighlight">don't </Text>eat red meat.
            </Text>
          );
        }
        if (redMeat === 1) {
          return (
            <Text variant="body">
              I eat red meat <Text variant="bodyHighlight">once </Text> a week.
            </Text>
          );
        } else {
          return (
            <Text variant="body">
              I eat red meat <Text variant="bodyHighlight">{redMeat} times </Text> a week.
            </Text>
          );
        }
      case 'breakfast':
        if (breakfast === 0) {
          return (
            <Text variant="body">
              I <Text variant="bodyHighlight">don't </Text>eat breakfast.
            </Text>
          );
        }
        if (breakfast === 1) {
          return (
            <Text variant="body">
              I breakfast <Text variant="bodyHighlight">once </Text>a week.
            </Text>
          );
        } else {
          return (
            <Text variant="body">
              I have breakfasts <Text variant="bodyHighlight">{breakfast} times </Text>a week.
            </Text>
          );
        }
      case 'whiteMeat':
        if (whiteMeat === 0) {
          return (
            <Text variant="body">
              I <Text variant="bodyHighlight">don't </Text>eat white meat.
            </Text>
          );
        }
        if (whiteMeat === 1) {
          return (
            <Text variant="body">
              I eat white meat or fish <Text variant="bodyHighlight">once </Text>a week.
            </Text>
          );
        } else {
          return (
            <Text variant="body">
              I eat white meat or fish <Text variant="bodyHighlight">{whiteMeat} times </Text>a
              week.
            </Text>
          );
        }
    }
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="Food" isReversed={false} />
      <Box style={{ position: 'absolute', top: hp(6), left: wp(2) }}></Box>
      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="bodySemiBold" style={{ marginBottom: hp(2), marginTop: hp(-2) }}>
            How many times a week do you ...
          </Text>

          <Text
            variant="bodySemiBold"
            style={{
              lineHeight: 32,
              textAlign: 'center',
              marginTop: hp(-1),
            }}
          >
            ...have a breakfast?
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setBreakfast(value)}
            value={breakfast}
            step={1}
            maximumValue={7}
            minimumValue={0}
          />
          {generateText('breakfast')}

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="bodySemiBold" style={{ lineHeight: 32 }}>
            ...eat red meat? (beef, lamb)
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setRedMeat(value)}
            value={redMeat}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />
          {generateText('redMeat')}

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="bodySemiBold" style={{ lineHeight: 32 }}>
            ...eat white meat or fish ?
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setWhiteMeat(value)}
            value={whiteMeat}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />
          <Text variant="body">{generateText('whiteMeat')}</Text>
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
          <Button variant="default" style={styles.button} onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideFood;

const styles = StyleSheet.create({
  button: { marginBottom: 10 },
  content: {
    maxWidth: wp(100),
    alignItems: 'center',
    marginTop: hp('5%'),
    marginHorizontal: wp(2),
  },
  textContainer: {
    maxWidth: wp(86),
  },
});
