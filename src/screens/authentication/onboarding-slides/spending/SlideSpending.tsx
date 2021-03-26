import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../../../components/Button';
import { Text, useTheme } from '../../../../components/Theme';
import { PropsSlide } from '../../types';
import SlideTitle from '../../components/TopSlide';
import { SliderOnboarding } from '../../components';
import { useTypedSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingSpendingActionType } from '../../../../redux/types';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={isFossil ? theme.slideStyle.footerReverse : theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How much do you spend for clothes ?</Text>
          <Text variant="body">{clothes} € / month</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setClothes(value)}
            value={clothes}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />

          <View style={{ padding: hp('2%') }}></View>
          <Text variant="body">How much do you spend for furniture ?</Text>
          <Text variant="body">{furniture} € / month</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setFurniture(value)}
            value={furniture}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />

          <View style={{ padding: hp('2%') }}></View>
          <Text variant="body">How much do you spend for hobbies ?</Text>
          <Text variant="body">{hobbies} € / month</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setHobbies(value)}
            value={hobbies}
            step={10}
            maximumValue={1000}
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

export default SlideSpending;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  button: { marginBottom: 10 },
});
