import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { SliderOnboarding } from '../../authentication/components';
import { PropsSlide } from '../../authentication/types';
import { Box, Button, Text, useTheme } from '../../../components';
import { useTypedSelector } from '../../../hooks';
import { OnboardingEnergyActionType } from '../../../redux/types';

const { width } = Dimensions.get('window');

const EnergySettingScreen = ({ onPress }: PropsSlide) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { energy } = useTypedSelector(state => state.onboarding);
  const [roommates, setRoommates] = useState(energy.roommates);
  const [electricityConsumption, setElectricityConsumption] = useState(
    energy.electricity_consumption
  );
  const [houseSurface, setHouseSurface] = useState(energy.house_surface);
  const [isFuelHeating, setIsFuelHeating] = useState(energy.isFuelHeating);
  const [fuel, setFuel] = useState(energy.fuel_consumption);
  const [gas, setGas] = useState(energy.gas_consumption);

  const handlePress = () => {
    onPress();
  };

  return (
    <ScrollView>
      <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#39D697' }}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxTitle}
          backgroundColor="primary"
        >
          <Text variant="title2" color="white">
            ENERGY EMISSIONS
          </Text>
        </Box>
        <Box
          paddingTop="m"
          style={styles.boxContainer}
          justifyContent="center"
          alignItems="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
            Change fixed emissions
          </Text>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{roommates} roommates </Text>
            <SliderOnboarding
              onValueChange={(value: number) => setRoommates(value)}
              value={roommates}
              step={1}
              maximumValue={10}
              minimumValue={0}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{houseSurface} m²</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setHouseSurface(value)}
              value={houseSurface}
              step={5}
              maximumValue={300}
              minimumValue={0}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{electricityConsumption} € / month (electricity)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setElectricityConsumption(value)}
              value={electricityConsumption}
              step={10}
              maximumValue={300}
              minimumValue={20}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{fuel} € / month (fuel)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setFuel(value)}
              value={fuel}
              step={10}
              maximumValue={300}
              minimumValue={0}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{gas} € / month (gas)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setGas(value)}
              value={gas}
              step={10}
              maximumValue={300}
              minimumValue={0}
            />
          </Box>
        </Box>
        <Button variant="default" onPress={() => handlePress} label="Edit" style={{ margin: 10 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    width: width,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxContainer: {
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  boxSlider: {
    width: wp('90%'),
    height: 80,
    borderBottomWidth: 2,
    borderRadius: 20,
  },
});

export default EnergySettingScreen;
