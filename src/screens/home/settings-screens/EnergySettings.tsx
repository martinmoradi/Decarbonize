import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SliderOnboarding } from '../../authentication/components';
import { Box, Button, Text, useTheme } from '../../../components';
import { useTypedSelector } from '../../../hooks';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';
import { useActions } from '../../../hooks';
import { SettingFoodType } from '../../../redux/types';
const { width } = Dimensions.get('window');

const EnergySettings = ({ navigation }: SettingsStackNavigationProps<'SettingsEnergy'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);
  const theme = useTheme();

  const {
    roommates,
    electricity_consumption,
    house_surface,
    fuel_consumption,
    gas_consumption,
    wood_consumption,
  } = energy;

  const [roommatesSetting, setRoommatesSetting] = useState(roommates);
  const [electricityConsumptionSetting, setElectricityConsumptionSetting] = useState(
    electricity_consumption
  );
  const [houseSurfaceSetting, setHouseSurfaceSetting] = useState(house_surface);
  const [fuelSetting, setFuelSetting] = useState(fuel_consumption);
  const [gasSetting, setGasSetting] = useState(gas_consumption);
  const [woodSettings, setWoodSettings] = useState(wood_consumption);

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
    <ScrollView style={{ backgroundColor: theme.colors.secondary, flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
          minHeight: hp(100),
        }}
      ></Box>
      <Box marginBottom="l" marginTop="s">
        <Box
          alignItems="center"
          style={styles.boxInfo}
          backgroundColor="lightgray"
          paddingTop="l"
          paddingBottom="xl"
          marginTop="m"
        >
          <Text
            variant="titleCard"
            marginTop="s"
            marginBottom="s"
            style={{ color: theme.colors.text }}
          >
            My <Text color="primary">housing</Text>
          </Text>
          <Box marginTop="m" style={styles.boxStyle}>
            <Text variant="body" style={{ marginBottom: hp('2%'), textAlign: 'center' }}>
              If you choose to edit your settings, your carbon footprint will be updated
              automatically.
            </Text>
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            marginTop="s"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">
              {roommatesSetting === 1
                ? 'I live alone'
                : `Our household is made up of ${roommatesSetting} individuals`}
            </Text>
            <SliderOnboarding
              onValueChange={(value: number) => setRoommatesSetting(value)}
              value={roommatesSetting}
              step={1}
              maximumValue={10}
              minimumValue={1}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">The size of my house is {houseSurfaceSetting} m²</Text>
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
            <Text variant="body">
              I pay {electricityConsumptionSetting} € / month in electricity
            </Text>
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
            <Text variant="body">
              {fuelSetting
                ? `I pay ${fuelSetting} € / month in heating fuel`
                : 'I do not use heating fuel '}
            </Text>
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
            <Text variant="body">
              {gasSetting
                ? `I pay ${gasSetting} € / month in heating gas`
                : 'I do not use heating gas '}
            </Text>
            <SliderOnboarding
              onValueChange={(value: number) => setGasSetting(value)}
              value={gasSetting}
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
            <Text variant="body">
              {woodSettings
                ? `I pay ${woodSettings} € / month in heating wood`
                : 'I do not use heating wood '}
            </Text>
            <SliderOnboarding
              onValueChange={(value: number) => setWoodSettings(value)}
              value={woodSettings}
              step={10}
              maximumValue={300}
              minimumValue={0}
            />
          </Box>
          <Box marginTop="l">
            <Button
              variant="primary"
              onPress={handlePress}
              label="Edit"
              style={{ margin: 10, marginBottom: hp(5) }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Box style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text variant="body" style={{ color: '#ff6361' }}>
                  Cancel
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    width: wp(100),
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxSlider: {
    width: wp('95%'),
    height: 80,
    borderRadius: 20,
  },
  boxInfo: {
    width: wp('100%'),
    height: hp('110%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 5,
  },
  boxContainer: {
    width: wp(100),
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
});

export default EnergySettings;

/*
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
*/
