import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SliderOnboarding } from '../../authentication/components';
import { Box, Button, Text } from '../../../components';
import { useActions, useTypedSelector } from '../../../hooks';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';

const { width } = Dimensions.get('window');

const EnergySettings = ({ navigation }: SettingsStackNavigationProps<'SettingsEnergy'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);

  const {
    roommates,
    electricity_consumption,
    house_surface,
    fuel_consumption,
    gas_consumption,
  } = energy;

  const [roommatesSetting, setRoommatesSetting] = useState(roommates);
  const [electricityConsumptionSetting, setElectricityConsumptionSetting] = useState(
    electricity_consumption
  );
  const [houseSurfaceSetting, setHouseSurfaceSetting] = useState(house_surface);
  const [fuelSetting, setFuelSetting] = useState(fuel_consumption);
  const [gasSetting, setGasSetting] = useState(gas_consumption);

  const editEnergy = {
    ...food,
    ...spending,
    roommates: roommatesSetting,
    electricity_consumption: electricityConsumptionSetting,
    house_surface: houseSurfaceSetting,
    fuel_consumption: fuelSetting,
    gas_consumption: gasSetting,
  };

  const handlePress = () => {
    putFixedEmissions(editEnergy);
    navigation.navigate('Settings');
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
            <Text variant="body">{roommatesSetting} roommates </Text>
            <SliderOnboarding
              onValueChange={(value: number) => setRoommatesSetting(value)}
              value={roommatesSetting}
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
            <Text variant="body">{houseSurfaceSetting} m²</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setHouseSurfaceSetting(value)}
              value={houseSurfaceSetting}
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
            <Text variant="body">{electricityConsumptionSetting} € / month (electricity)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setElectricityConsumptionSetting(value)}
              value={electricityConsumptionSetting}
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
            <Text variant="body">{fuelSetting} € / month (fuel)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setFuelSetting(value)}
              value={fuelSetting}
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
            <Text variant="body">{gasSetting} € / month (gas)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setGasSetting(value)}
              value={gasSetting}
              step={10}
              maximumValue={300}
              minimumValue={0}
            />
          </Box>
        </Box>
        <Button variant="default" onPress={handlePress} label="Edit" style={{ margin: 10 }} />
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

export default EnergySettings;
