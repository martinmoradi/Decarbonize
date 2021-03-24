import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';
import { useTypedSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingSpendingActionType } from '../../../redux/types';

const SlideSpending = ({ onPress }: PropsSlide) => {
  const dispatch = useDispatch();
  const { spending, energy } = useTypedSelector(state => state.onboarding);
  const { isWoodHeating, isFuelHeating, isGasHeating } = energy;
  const isFossil = isWoodHeating || isFuelHeating || isGasHeating;
  const [clothes, setClothes] = useState(spending.clothes);
  const [furniture, setFurniture] = useState(spending.furniture);
  const [hobbies, setHobbies] = useState(spending.others);

  const { width } = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const handlePress = () => {
    dispatch({ type: OnboardingSpendingActionType.SET_CLOTHES, payload: clothes });
    dispatch({ type: OnboardingSpendingActionType.SET_FURNITURE, payload: furniture });
    dispatch({ type: OnboardingSpendingActionType.SET_OTHERS, payload: hobbies });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="SPENDING" svgTitle="habit" isReversed={isFossil ? true : false} />
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
          <Button variant="primary" onPress={handlePress} label="Sign up !" />
        </View>
      </View>
    </View>
  );
};

export default SlideSpending;
