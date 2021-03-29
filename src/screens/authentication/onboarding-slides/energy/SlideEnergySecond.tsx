import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { Box, Text, useTheme } from '../../../../components/Theme';
import { useTypedSelector } from '../../../../hooks';
import { OnboardingEnergyActionType, WoodsType } from '../../../../redux/types/onboardingTypes';
import { SliderOnboarding } from '../../components';
import SlideTitle from '../../components/TopSlide';
import { PropsSlide } from '../../types';

const SlideEnergySecond = ({ onPress, goBack }: PropsSlide) => {
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
      <SlideTitle title="ENERGY" svgTitle="Energy" isReversed={true} />
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
      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="bodySemiBold" style={{ marginTop: hp(2) }}>
            What is your monthly electricity consumption?
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setElectricityConsumption(value)}
            value={electricityConsumption}
            step={10}
            maximumValue={300}
            minimumValue={20}
          />
          <Text variant="body">
            <Text variant="bodyHighlight">{electricityConsumption} €</Text> per month
          </Text>

          <View style={styles.paddingBoxes}></View>
          <Text variant="bodySemiBold" style={{ marginTop: hp(2) }}>
            Do you use any of the following options for heating?
          </Text>
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
              <Text variant="bodySemiBold">Which type of wood ?</Text>
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
          <Button variant="default" style={styles.button} onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergySecond;

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
  button: { marginBottom: 10 },
});
