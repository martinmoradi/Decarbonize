import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { Text, useTheme } from '../../../../components/Theme';
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

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="Food" isReversed={true} />

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
          <Button variant="default" style={styles.button} onPress={handlePress} label="Next" />
          <TouchableOpacity onPress={goBack}>
            <Ionicons name="md-return-down-back" size={24} color="black" />
          </TouchableOpacity>
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
