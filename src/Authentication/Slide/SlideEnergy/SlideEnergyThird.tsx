import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideEnergyThird = ({ onPress }: PropsSlide) => {
  const { energy } = useContext(OnboardingContext);
  const { gasHeating, fuelHeating, woodHeating, onChangeFuel, onChangeGas, onChangeWood } = energy;

  const { height, width } = Dimensions.get('window');

  const [fuelValue, setFuelValue] = useState<number>(0);
  const [woodValue, setWoodValue] = useState<number>(0);
  const [gasValue, setGasValue] = useState<number>(0);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slider: {
      height: height / 3,
    },
    footer: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },
    buttonStyle: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
    },
    title: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 0 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  return (
    <View style={styles.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={false} />

      <View style={styles.footer}>
        <View style={styles.content}>
          {fuelHeating && (
            <>
              <Text variant="body">What is your Fuel consumption ?</Text>
              <Text variant="body">{fuelValue} € / month</Text>
              <SliderOnboarding
                onValueChange={setFuelValue}
                onSlidingComplete={onChangeFuel}
                value={fuelValue}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
            </>
          )}
          {gasHeating && (
            <>
              <View style={{ padding: 6 }}></View>
              <Text variant="body">What is your Gas consumption ?</Text>
              <Text variant="body">{gasValue} € / month</Text>
              <SliderOnboarding
                onValueChange={setGasValue}
                onSlidingComplete={onChangeGas}
                value={gasValue}
                step={10}
                maximumValue={300}
                minimumValue={0}
              />
            </>
          )}
          {woodHeating && (
            <>
              <Text variant="body">What is your Wood consumption ?</Text>
              <Text variant="body">{woodValue} € / month</Text>
              <SliderOnboarding
                onValueChange={setWoodValue}
                onSlidingComplete={onChangeWood}
                value={woodValue}
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
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergyThird;
