import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonGroup } from 'react-native-elements';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideEnergySecond = ({ onPress }: PropsSlide) => {
  const { energy } = useContext(OnboardingContext);
  const [woodTypeIndex, setWoodTypeIndex] = useState<number | undefined>();
  const {
    woodHeating,
    fuelHeating,
    gasHeating,
    onChangeElectricity,
    onChangeWoodType,
    onChangeWoodHeating,
    onChangeFuelHeating,
    onChangeGasHeating,
    onChangeFuel,
    onChangeGas,
    onChangeWood,
  } = energy;
  const buttonsHeat = ['Fuel', 'Gas', 'Wood'];
  const buttonsWood = ['Wood logs', 'Wood pellets'];
  const handleWoodType = (e: number, woodType: string[]) => {
    onChangeWoodType(woodType[e]);
    setWoodTypeIndex(e);
  };
  const [heat, setHeat] = useState<number[]>();
  const [electricityValue, setElectricityValue] = useState<number>(0);
  const { width } = Dimensions.get('window');

  const checkHeat = (heat: number[] | undefined) => {
    heat?.includes(0) ? onChangeFuelHeating(true) : onChangeFuelHeating(false);
    heat?.includes(1) ? onChangeGasHeating(true) : onChangeGasHeating(false);
    heat?.includes(2) ? onChangeWoodHeating(true) : onChangeWoodHeating(false);
  };

  useEffect(() => {
    checkHeat(heat);

    if (!woodHeating) {
      onChangeWood(0);
      onChangeWoodType('');
      setWoodTypeIndex(undefined);
    }

    !fuelHeating ? onChangeFuel(0) : null;
    !gasHeating ? onChangeGas(0) : null;
  }, [heat]);

  const theme = useTheme();
  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const WoodEnergy = () => (
    <>
      <Text variant="body">Which type of wood ?</Text>
      <ButtonGroup
        buttons={buttonsWood}
        onPress={e => handleWoodType(e, buttonsWood)}
        selectedIndex={woodTypeIndex}
        selectedButtonStyle={theme.slideStyle.buttonStyle}
        textStyle={{ textAlign: 'center' }}
        containerStyle={{ borderWidth: 0 }}
        innerBorderStyle={{ width: 0 }}
      />
    </>
  );
  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={true} />

      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="body">What is your electricity consumption ?</Text>
          <Text variant="body">{electricityValue} € / month</Text>
          <SliderOnboarding
            onValueChange={setElectricityValue}
            onSlidingComplete={onChangeElectricity}
            value={electricityValue}
            step={10}
            maximumValue={300}
            minimumValue={20}
          />

          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            selectMultiple={true}
            onPress={setHeat}
            selectedIndexes={heat}
            selectedButtonStyle={theme.slideStyle.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <View style={{ padding: hp('1%') }}></View>
          {heat && heat.includes(2) && <WoodEnergy />}
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
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergySecond;
