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
  const { food } = useTypedSelector(state => state.onboarding);

  const [breakfast, setBreakfast] = useState(food.breakfasts_per_week);
  const [redMeat, setRedMeat] = useState(food.red_meats_per_week);
  const [whiteMeat, setWhiteMeat] = useState(food.white_meats_per_week);
  const [vegetarianMeat, setVegetarianMeat] = useState(food.vegetarian_per_week);
  const [veganMeat, setVeganMeat] = useState(food.vegan_per_week);
  const { putEmissions } = useActions();

  const editFood: SettingFoodType = {
    breakfasts_per_week: breakfast,
    red_meats_per_week: redMeat,
    white_meats_per_week: whiteMeat,
    vegan_per_week: veganMeat,
    vegetarian_per_week: vegetarianMeat,
  };

  const { data } = useTypedSelector(state => state.emissions);
  const { weekly_alimentation, weekly_housing } = data;

  const handlePress = () => {
    putEmissions(editFood);
    // navigation.navigate('Settings');
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
            <Text variant="body">{breakfast} breakfast(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setBreakfast(value)}
              value={breakfast}
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
            <Text variant="body">{redMeat} red meat(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setRedMeat(value)}
              value={redMeat}
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
            <Text variant="body">{whiteMeat} white meat(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setWhiteMeat(value)}
              value={whiteMeat}
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
            <Text variant="body">{vegetarianMeat} vegetarian meal(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setVegetarianMeat(value)}
              value={vegetarianMeat}
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
            <Text variant="body">{veganMeat} vegan meal(s) / week</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setVeganMeat(value)}
              value={veganMeat}
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
