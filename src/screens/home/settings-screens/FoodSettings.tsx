import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Button, Text, useTheme } from '../../../components';
import { useActions, useTypedSelector } from '../../../hooks';
import { SettingFoodType } from '../../../redux/types';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';
import { SliderOnboarding } from '../../authentication/components';

const FoodSettings = ({ navigation }: SettingsStackNavigationProps<'SettingsFood'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);
  const theme = useTheme();

  const {
    breakfasts_per_week,
    red_meats_per_week,
    white_meats_per_week,
    vegetarian_per_week,
    vegan_per_week,
  } = food;

  const [breakfastSetting, setBreakfastSetting] = useState(breakfasts_per_week);
  const [redMeatSetting, setRedMeatSetting] = useState(red_meats_per_week);
  const [whiteMeatSetting, setWhiteMeatSetting] = useState(white_meats_per_week);
  const [vegetarianMeatSetting, setVegetarianMeatSetting] = useState(vegetarian_per_week);
  const [veganMeatSetting, setVeganMeatSetting] = useState(vegan_per_week);

  const editFood: SettingFoodType = {
    ...energy,
    ...spending,
    breakfasts_per_week: breakfastSetting,
    red_meats_per_week: redMeatSetting,
    white_meats_per_week: whiteMeatSetting,
    vegan_per_week: veganMeatSetting,
    vegetarian_per_week: vegetarianMeatSetting,
  };

  const handlePress = () => {
    putFixedEmissions(editFood);
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
            My <Text color="primary">alimentation</Text>
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
            <Text variant="body">{breakfastSetting} breakfast(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setBreakfastSetting(value)}
              value={breakfastSetting}
              step={1}
              maximumValue={7}
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
            <Text variant="body">{redMeatSetting} red meat(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setRedMeatSetting(value)}
              value={redMeatSetting}
              step={1}
              maximumValue={14}
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
            <Text variant="body">{whiteMeatSetting} white meat(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setWhiteMeatSetting(value)}
              value={whiteMeatSetting}
              step={1}
              maximumValue={14}
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
            <Text variant="body">{vegetarianMeatSetting} vegetarian meal(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setVegetarianMeatSetting(value)}
              value={vegetarianMeatSetting}
              step={1}
              maximumValue={14}
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
            <Text variant="body">{veganMeatSetting} vegan meal(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setVeganMeatSetting(value)}
              value={veganMeatSetting}
              step={1}
              maximumValue={14}
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
    height: hp('100%'),
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

export default FoodSettings;
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
          FOOD EMISSIONS
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
          <Text variant="body">{breakfastSetting} breakfast(s) / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setBreakfastSetting(value)}
            value={breakfastSetting}
            step={1}
            maximumValue={7}
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
          <Text variant="body">{redMeatSetting} red meat(s) / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setRedMeatSetting(value)}
            value={redMeatSetting}
            step={1}
            maximumValue={14}
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
          <Text variant="body">{whiteMeatSetting} white meat(s) / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setWhiteMeatSetting(value)}
            value={whiteMeatSetting}
            step={1}
            maximumValue={14}
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
          <Text variant="body">{vegetarianMeatSetting} vegetarian meal(s) / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setVegetarianMeatSetting(value)}
            value={vegetarianMeatSetting}
            step={1}
            maximumValue={14}
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
          <Text variant="body">{veganMeatSetting} vegan meal(s) / week</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setVeganMeatSetting(value)}
            value={veganMeatSetting}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />
        </Box>
      </Box>
      <Button variant="default" onPress={handlePress} label="Edit" style={{ margin: 10 }} />
    </View>
  </ScrollView>
);


*/
