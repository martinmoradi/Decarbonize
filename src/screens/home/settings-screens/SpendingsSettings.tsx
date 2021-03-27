import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SliderOnboarding } from '../../authentication/components';
import { Box, Button, Text } from '../../../components';
import { useActions, useTypedSelector } from '../../../hooks';
import { SettingsStackNavigationProps } from '../../../routers/NavigationTypes';
const { width } = Dimensions.get('window');

const SpendingsSettings = ({ navigation }: SettingsStackNavigationProps<'SettingsSpending'>) => {
  const { putFixedEmissions } = useActions();
  const { energy, food, spending } = useTypedSelector(state => state.onboarding);

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

export default SpendingsSettings;
