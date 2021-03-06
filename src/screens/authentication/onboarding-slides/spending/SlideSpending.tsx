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
import { OnboardingSpendingActionType } from '../../../../redux/types';
import { SliderOnboarding } from '../../components';
import SlideTitle from '../../components/TopSlide';
import { PropsSlide } from '../../types';

const SlideSpending = ({ onPress, goBack }: PropsSlide) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { spending, energy } = useTypedSelector(state => state.onboarding);
  const { isWoodHeating, isFuelHeating, isGasHeating } = energy;
  const isFossil = isWoodHeating || isFuelHeating || isGasHeating;
  const [clothes, setClothes] = useState(spending.clothes);
  const [furniture, setFurniture] = useState(spending.furniture);
  const [hobbies, setHobbies] = useState(spending.others);

  const handlePress = () => {
    dispatch({ type: OnboardingSpendingActionType.SET_CLOTHES, payload: clothes });
    dispatch({ type: OnboardingSpendingActionType.SET_FURNITURE, payload: furniture });
    dispatch({ type: OnboardingSpendingActionType.SET_OTHERS, payload: hobbies });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="SPENDING" svgTitle="Habits" isReversed={isFossil ? true : false} />
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
      <View style={isFossil ? theme.slideStyle.footerReverse : theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="bodySemiBold">How much do you spend per month on clothes ?</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setClothes(value)}
            value={clothes}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />
          <Text variant="body">
            <Text variant="bodyHighlight">{clothes} ???</Text> per month
          </Text>

          <View style={{ padding: hp('2%') }}></View>
          <Text variant="bodySemiBold">How much do you spend per month on furnitures ?</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setFurniture(value)}
            value={furniture}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />
          <Text variant="body">
            <Text variant="bodyHighlight">{furniture} ???</Text> per month
          </Text>

          <View style={{ padding: hp('2%') }}></View>
          <Text variant="body">How much do you spend per month on hobbies ?</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setHobbies(value)}
            value={hobbies}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />
          <Text variant="body">
            <Text variant="bodyHighlight">{hobbies} ???</Text> per month
          </Text>
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

export default SlideSpending;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  button: { marginBottom: 10 },
});
