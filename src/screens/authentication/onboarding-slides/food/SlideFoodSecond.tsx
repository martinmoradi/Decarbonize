import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
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

const SlideFoodSecond = ({ onPress, goBack }: PropsSlide) => {
  const { food } = useTypedSelector(state => state.onboarding);
  const [vegan, setVegan] = useState(food.vegan_per_week);
  const [vegetarian, setVegetarian] = useState(food.vegetarian_per_week);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handlePress = () => {
    dispatch({ type: OnboardingFoodActionType.SET_VEGETARIAN, payload: vegetarian });
    dispatch({ type: OnboardingFoodActionType.SET_VEGAN, payload: vegan });
    onPress();
  };

  const generateText = (variant: 'vegan' | 'vegetarian') => {
    switch (variant) {
      case 'vegetarian':
        if (vegetarian === 0) {
          return (
            <Text variant="body">
              I <Text variant="bodyHighlight">don't </Text>eat vegetarian.
            </Text>
          );
        }
        if (vegetarian === 1) {
          return (
            <Text variant="body">
              I eat vegetarian <Text variant="bodyHighlight">once </Text> a week.
            </Text>
          );
        } else {
          return (
            <Text variant="body">
              I eat vegetarian <Text variant="bodyHighlight">{vegetarian} times </Text> a week.
            </Text>
          );
        }
      case 'vegan':
        if (vegan === 0) {
          return (
            <Text variant="body">
              I <Text variant="bodyHighlight">don't </Text>eat vegan.
            </Text>
          );
        }
        if (vegan === 1) {
          return (
            <Text variant="body">
              I eat vegan <Text variant="bodyHighlight">once </Text>a week.
            </Text>
          );
        } else {
          return (
            <Text variant="body">
              I eat vegan <Text variant="bodyHighlight">{vegan} times </Text>a week.
            </Text>
          );
        }
    }
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="Food" isReversed={true} />
      <Box style={{ position: 'absolute', top: hp(3), left: wp(2) }}>
        <TouchableOpacity
          onPress={goBack}
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <Ionicons name="chevron-back-circle-outline" size={24} color="white" />
          <Text color="white" variant="button">
            back
          </Text>
        </TouchableOpacity>
      </Box>
      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="bodySemiBold" style={{ marginBottom: hp(2), marginTop: hp(-2) }}>
            How many times a week do you ...
          </Text>
          <Text
            variant="bodySemiBold"
            style={{
              lineHeight: 32,
              textAlign: 'center',
              marginTop: hp(1),
            }}
          >
            ...eat vegetarian?
          </Text>
          <View style={{ padding: hp('1%') }}></View>
          <SliderOnboarding
            onValueChange={(value: number) => setVegetarian(value)}
            value={vegetarian}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />
          {generateText('vegetarian')}

          <View style={{ padding: hp('1%') }}></View>
          <Text
            variant="bodySemiBold"
            style={{
              lineHeight: 32,
              textAlign: 'center',
              marginTop: hp(1),
            }}
          >
            ...eat vegan?
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setVegan(value)}
            value={vegan}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />
          {generateText('vegan')}
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

export default SlideFoodSecond;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  button: { marginBottom: 10 },
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
});
