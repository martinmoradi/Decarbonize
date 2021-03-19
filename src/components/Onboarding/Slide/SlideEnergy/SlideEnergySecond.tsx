import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup, Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import OnboardingContext from '../../../../Authentication/onboardingContext/OnboardingContext';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsSlide = {
  onPress: () => {};
};

const SlideEnergySecond = ({ onPress }: PropsSlide) => {
  const { energy } = useContext(OnboardingContext);
  const [woodTypeIndex, setWoodTypeIndex] = useState<number | undefined>();
  const {
    woodHeating,
    fuelHeating,
    gasHeating,
    gas,
    onChangeElectricity,
    onChangeWoodType,
    onChangeWoodHeating,
    onChangeFuelHeating,
    onChangeGasHeating,
    onChangeFuel,
    onChangeGas,
    onChangeWood,
  } = energy;
  const buttonsHeat = ['Fioul', 'Gas', 'Wood'];
  const buttonsWood = ['Wood logs', 'Wood pellets'];
  const handleWoodType = (e: number, woodType: string[]) => {
    onChangeWoodType(woodType[e]);
    setWoodTypeIndex(e);
  };
  const [heat, setHeat] = useState<number[]>();
  const [electricityValue, setElectricityValue] = useState<number>(0);
  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    heat?.includes(0) ? onChangeFuelHeating(true) : onChangeFuelHeating(false);
    heat?.includes(1) ? onChangeGasHeating(true) : onChangeGasHeating(false);
    heat?.includes(2) ? onChangeWoodHeating(true) : onChangeWoodHeating(false);
    !fuelHeating ? onChangeFuel(0) : null;
    !woodHeating ? onChangeWood(0) : null;
    !woodHeating ? onChangeWoodType('') : null;
    !woodHeating ? setWoodTypeIndex(undefined) : null;
    !gasHeating ? onChangeGas(0) : null;
  }, [heat, gasHeating, woodHeating, fuelHeating]);
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
      borderTopLeftRadius: 100,
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
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const WoodEnergy = () => (
    <>
      <Text variant="body">Which type of wood ?</Text>
      <ButtonGroup
        buttons={buttonsWood}
        onPress={e => handleWoodType(e, buttonsWood)}
        selectedIndex={woodTypeIndex}
        selectedButtonStyle={styles.buttonStyle}
        textStyle={{ textAlign: 'center' }}
        containerStyle={{ borderWidth: 0 }}
        innerBorderStyle={{ width: 0 }}
      />
    </>
  );
  return (
    <View style={styles.container}>
      <View
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
            borderBottomRightRadius: 75,
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
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">What is your electricity consumption ? </Text>
          <Text variant="body">{electricityValue} € / month</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={300}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={20}
            onValueChange={setElectricityValue}
            onSlidingComplete={onChangeElectricity}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={electricityValue}
          />
          <View style={{ padding: 6 }}></View>
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            selectMultiple={true}
            onPress={setHeat}
            selectedIndexes={heat}
            selectedButtonStyle={styles.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <View style={{ padding: 6 }}></View>
          {heat && heat.includes(2) && <WoodEnergy />}
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

export default SlideEnergySecond;
