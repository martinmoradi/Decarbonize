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

const SpendingsSettings = ({ navigation }: SettingsStackNavigationProps<'SettingsSpending'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);
  const theme = useTheme();

  const { clothes, furniture, others } = spending;

  const [clothesSetting, setClothesSetting] = useState(clothes);
  const [furnituresSetting, setFurnituresSetting] = useState(furniture);
  const [hobbiesSetting, setHobbiesSetting] = useState(others);

  const editSpending = {
    ...food,
    ...energy,
    clothes: clothesSetting,
    furnitures: furnituresSetting,
    others: hobbiesSetting,
  };

  const handlePress = () => {
    putFixedEmissions(editSpending);
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
            My <Text color="primary">spendings</Text>
          </Text>
          <Box marginTop="m" marginBottom="xl" style={styles.boxStyle}>
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
            <Text variant="body">{clothesSetting} € / month (clothes)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setClothesSetting(value)}
              value={clothesSetting}
              step={10}
              maximumValue={1000}
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
            <Text variant="body">{furnituresSetting} € / month (furnitures)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setFurnituresSetting(value)}
              value={furnituresSetting}
              step={10}
              maximumValue={1000}
              minimumValue={0}
            />
          </Box>
          <Box
            alignItems="center"
            style={styles.boxSlider}
            justifyContent="center"
            marginBottom="xl"
            backgroundColor="lightgray"
            borderBottomColor="white"
          >
            <Text variant="body">{hobbiesSetting} € / month (hobbies)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setHobbiesSetting(value)}
              value={hobbiesSetting}
              step={10}
              maximumValue={1000}
              minimumValue={0}
            />
          </Box>

          <Box marginTop="xl">
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
    height: hp('90%'),
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

export default SpendingsSettings;

/*
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', height: hp('100%'), backgroundColor: '#39D697' }}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxTitle}
          backgroundColor="primary"
        >
          <Text variant="title2" color="white">
            SPENDING EMISSIONS
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
            <Text variant="body">{clothesSetting} € / month (clothes)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setClothesSetting(value)}
              value={clothesSetting}
              step={10}
              maximumValue={1000}
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
            <Text variant="body">{furnituresSetting} € / month (furnitures)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setFurnituresSetting(value)}
              value={furnituresSetting}
              step={10}
              maximumValue={1000}
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
            <Text variant="body">{hobbiesSetting} € / month (hobbies)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setHobbiesSetting(value)}
              value={hobbiesSetting}
              step={10}
              maximumValue={1000}
              minimumValue={0}
            />
          </Box>
        </Box>
        <Button variant="default" onPress={handlePress} label="Edit" style={{ margin: 10 }} />
      </View>
    </ScrollView>
  );
*/
