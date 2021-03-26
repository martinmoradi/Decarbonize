import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SliderOnboarding } from '../../authentication/components';
import { Box, Button, Text } from '../../../components';
import { useTypedSelector } from '../../../hooks';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';
import { useActions } from '../../../hooks';
import { SettingFoodType } from '../../../redux/types';

const { width } = Dimensions.get('window');

const FoodSettingScreen = ({ navigation }: SettingsStackNavigationProps<'SettingsFood'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);
  console.log('food:', food);

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

export default FoodSettingScreen;
