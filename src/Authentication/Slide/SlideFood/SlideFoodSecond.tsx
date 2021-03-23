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

const SlideFoodSecond = ({ onPress }: PropsSlide) => {
  const { food } = useTypedSelector(state => state.onboarding);
  const [vegan, setVegan] = useState(food.vegan);
  const [vegetarian, setVegetarian] = useState(food.vegetarian);
  const dispatch = useDispatch();

  const theme = useTheme();
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const handlePress = () => {
    dispatch({ type: OnboardingFoodActionType.SET_VEGETARIAN, payload: vegetarian });
    dispatch({ type: OnboardingFoodActionType.SET_VEGAN, payload: vegan });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={true} />

      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegetarian meal ?
          </Text>
          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">{vegetarian} / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setVegetarian(value)}
            value={vegetarian}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegan meal ? ?
          </Text>
          <Text variant="body">{vegan} / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setVegan(value)}
            value={vegan}
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

export default SlideFoodSecond;
