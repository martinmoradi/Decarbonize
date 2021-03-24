import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../../../components/Button';
import { Text, useTheme } from '../../../../components/Theme';
import { PropsSlide } from '../../types';
import SlideTitle from '../../components/TopSlide';
import { SliderOnboarding } from '../../components';
import { useTypedSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingEnergyActionType } from '../../../../redux/types';

const SlideEnergyThird = ({ onPress }: PropsSlide) => {
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

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          {isFuelHeating && (
            <>
              <Text variant="body">What is your Fuel consumption ?</Text>
              <Text variant="body">{fuel} € / month</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setFuel(value)}
                value={fuel}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
            </>
          )}
          {isGasHeating && (
            <>
              <View style={{ padding: hp('1%') }}></View>
              <Text variant="body">What is your Gas consumption ?</Text>
              <Text variant="body">{gas} € / month</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setGas(value)}
                value={gas}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
            </>
          )}
          {isWoodHeating && (
            <>
              <Text variant="body">What is your Wood consumption ?</Text>
              <Text variant="body">{wood} € / month</Text>
              <SliderOnboarding
                onValueChange={(value: number) => setWood(value)}
                value={wood}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
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
          <Button variant="default" onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergyThird;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
});
