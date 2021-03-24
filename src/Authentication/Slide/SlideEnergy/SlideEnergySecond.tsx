import React, { useEffect, useState, useCallback } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ButtonGroup } from 'react-native-elements';
import { useTypedSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingEnergyActionType, WoodsType } from '../../../redux/types/onboardingTypes';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideEnergySecond = ({ onPress }: PropsSlide) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { energy } = useTypedSelector(state => state.onboarding);
  const [electricityConsumption, setElectricityConsumption] = useState(
    energy.electricity_consumption
  );
  const [isGasHeating, setIsGasHeating] = useState(energy.isGasHeating);
  const [isWoodHeating, setIsWoodHeating] = useState(energy.isWoodHeating);
  const [isFuelHeating, setIsFuelHeating] = useState(energy.isFuelHeating);
  const [woodType, setWoodType] = useState(energy.wood_type);
  const [woodConsumption, setWoodConsumption] = useState(energy.wood_consumption);
  const [fuelConsumption, setFuelConsumption] = useState(energy.fuel_consumption);
  const [gasConsumption, setGasConsumption] = useState(energy.gas_consumption);
  const [woodTypeIndex, setWoodTypeIndex] = useState<number | null>(null);
  const [selectedHeatingIndexes, setSelectedHeatingIndexes] = useState<number[]>();
  const buttonsHeat = ['Fuel', 'Gas', 'Wood'];
  const buttonsWood = ['Wood logs', 'Wood pellets'];

  const handleWoodType = useCallback((index: number) => {
    const woodTypes: WoodsType[] = ['wood_logs', 'wood_pellets'];
    setWoodType(woodTypes[index]);
    setWoodTypeIndex(index);
  }, []);

  const checkHeat = useCallback(
    (selectedHeatingIndexes: number[]) => {
      selectedHeatingIndexes?.includes(0) ? setIsFuelHeating(true) : setIsFuelHeating(false);
      selectedHeatingIndexes?.includes(1) ? setIsGasHeating(true) : setIsGasHeating(false);
      selectedHeatingIndexes?.includes(2) ? setIsWoodHeating(true) : setIsWoodHeating(false);
    },
    [selectedHeatingIndexes]
  );

  useEffect(() => {
    const selectedIndexes = [];
    if (isFuelHeating) selectedIndexes.push(0);
    if (isGasHeating) selectedIndexes.push(1);
    if (isWoodHeating) selectedIndexes.push(2);
  }, [isGasHeating, isWoodHeating, isGasHeating]);

  useEffect(() => {
    if (selectedHeatingIndexes) {
      checkHeat(selectedHeatingIndexes);
      if (!isWoodHeating) {
        setWoodConsumption(0);
        setWoodTypeIndex(null);
      }
      if (!isGasHeating) setGasConsumption(0);
      if (!isFuelHeating) setFuelConsumption(0);
    }
  }, [selectedHeatingIndexes]);

  const { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: hp('2.5%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    paddingBoxes: {
      padding: hp('1%'),
    },
  });

  const handlePress = () => {
    dispatch({
      type: OnboardingEnergyActionType.SET_ELECTRICITY_CONSUMPTION,
      payload: electricityConsumption,
    });
    dispatch({ type: OnboardingEnergyActionType.SET_IS_FUEL_HEATING, payload: isFuelHeating });
    dispatch({ type: OnboardingEnergyActionType.SET_IS_GAS_HEATING, payload: isGasHeating });
    dispatch({ type: OnboardingEnergyActionType.SET_IS_WOOD_HEATING, payload: isWoodHeating });
    dispatch({ type: OnboardingEnergyActionType.SET_WOOD_TYPE, payload: woodType });
    onPress();
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={true} />

      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="body">What is your electricity consumption ?</Text>
          <Text variant="body">{electricityConsumption} € / month</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setElectricityConsumption(value)}
            value={electricityConsumption}
            step={10}
            maximumValue={300}
            minimumValue={20}
          />

          <View style={styles.paddingBoxes}></View>
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            selectMultiple={true}
            onPress={setSelectedHeatingIndexes}
            selectedIndexes={selectedHeatingIndexes}
            selectedButtonStyle={theme.slideStyle.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <View style={styles.paddingBoxes}></View>
          {selectedHeatingIndexes?.includes(2) ? (
            <>
              <Text variant="body">Which type of wood ?</Text>
              <ButtonGroup
                buttons={buttonsWood}
                onPress={(index: number) => handleWoodType(index)}
                selectedIndex={woodTypeIndex}
                selectedButtonStyle={theme.slideStyle.buttonStyle}
                textStyle={{ textAlign: 'center' }}
                containerStyle={{ borderWidth: 0 }}
                innerBorderStyle={{ width: 0 }}
              />
            </>
          ) : null}
        </View>
        <View style={styles.container}>
          <Button variant="default" onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergySecond;
