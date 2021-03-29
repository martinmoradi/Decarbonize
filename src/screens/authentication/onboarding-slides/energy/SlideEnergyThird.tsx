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
import { OnboardingEnergyActionType } from '../../../../redux/types';
import { SliderOnboarding } from '../../components';
import SlideTitle from '../../components/TopSlide';
import { PropsSlide } from '../../types';

const SlideEnergyThird = ({ onPress, goBack }: PropsSlide) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { energy } = useTypedSelector(state => state.onboarding);
  const { isGasHeating, isWoodHeating, isFuelHeating } = energy;
  const [gas, setGas] = useState(energy.gas_consumption);
  const [fuel, setFuel] = useState(energy.fuel_consumption);
  const [wood, setWood] = useState(energy.wood_consumption);

  const handlePress = () => {
    dispatch({ type: OnboardingEnergyActionType.SET_GAS_CONSUMPTION, payload: gas });
    dispatch({ type: OnboardingEnergyActionType.SET_FUEL_CONSUMPTION, payload: fuel });
    dispatch({ type: OnboardingEnergyActionType.SET_WOOD_CONSUMPTION, payload: wood });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="Energy" isReversed={false} />
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
      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          {isFuelHeating && (
            <>
              <Text variant="bodySemiBold">What is your monthly fuel consumption ?</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setFuel(value)}
                value={fuel}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
              <Text variant="body">
                <Text variant="bodyHighlight">{fuel} €</Text> per month
              </Text>
            </>
          )}
          {isGasHeating && (
            <>
              <Box marginTop="l"></Box>
              <Text variant="bodySemiBold">What is your monthly gas consumption ?</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setGas(value)}
                value={gas}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
              <Text variant="body">
                <Text variant="bodyHighlight">{gas} €</Text> per month
              </Text>
            </>
          )}
          {isWoodHeating && (
            <>
              <Box marginTop="l"></Box>
              <Text variant="bodySemiBold">What is your monthly wood consumption ?</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setWood(value)}
                value={wood}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
              <Text variant="body">
                <Text variant="bodyHighlight">{wood} €</Text> per month
              </Text>
            </>
          )}
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

export default SlideEnergyThird;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  button: { marginBottom: 10 },
});
