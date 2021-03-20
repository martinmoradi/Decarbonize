import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';
import IconSvg from '../../../../assets/icons/IconSvg';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';

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
      <SlideTitle title="Energy" svgTitle="energy" isReversed={false} />
      {/* <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={styles.slider}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderBottomLeftRadius: 75,
            flex: 1,
          }}
        >
          <Text style={styles.title} variant="titleTopSlide">
            ENERGY
          </Text>
          <View style={{ alignItems: 'center', translateY: -80 }}>
            <IconSvg name="energyBis" />
          </View>
        </View>
      </View> */}
      <View style={styles.footer}>
        <View style={styles.content}>
          {fuelHeating && (
            <>
              <Text variant="body">Fuel</Text>
              <Text variant="body">{fuelValue} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={setFuelValue}
                onSlidingComplete={onChangeFuel}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={fuelValue}
              />
            </>
          )}
          {gasHeating && (
            <>
              <View style={{ padding: 6 }}></View>
              <Text variant="body">Gas </Text>
              <Text variant="body">{gasValue} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={setGasValue}
                onSlidingComplete={onChangeGas}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={gasValue}
              />
            </>
          )}
          {woodHeating && (
            <>
              <Text variant="body">Wood</Text>
              <Text variant="body">{woodValue} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={setWoodValue}
                onSlidingComplete={onChangeWood}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={woodValue}
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
