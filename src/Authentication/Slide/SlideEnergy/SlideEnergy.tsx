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
import { OnboardingEnergyActionType } from '../../../redux/types';

const SlideEnergy = ({ onPress }: PropsSlide) => {
  const { width } = Dimensions.get('window');
  const theme = useTheme();
  const dispatch = useDispatch();
  const { energy } = useTypedSelector(state => state.onboarding);
  const [people, setPeople] = useState(energy.people);
  const [surface, setSurface] = useState(energy.surface);

  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const handlePress = () => {
    dispatch({ type: OnboardingEnergyActionType.SET_PEOPLE, payload: people });
    dispatch({ type: OnboardingEnergyActionType.SET_SURFACE, payload: surface });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={false} />

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <Text variant="body">{people} </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setPeople(value)}
            value={people}
            step={1}
            maximumValue={10}
            minimumValue={0}
          />
          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">What is the area of your housing?</Text>
          <Text variant="body">{surface} m²</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setSurface(value)}
            value={surface}
            step={5}
            maximumValue={300}
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

export default SlideEnergy;
