import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { SliderOnboarding } from '../../authentication/components';
import { PropsSlide } from '../../authentication/types';
import { Box, Button, Text } from '../../../components';
import { useTypedSelector } from '../../../hooks';
import { OnboardingFoodActionType } from '../../../redux/types';

const { width } = Dimensions.get('window');

const SpendingSettingScreen = ({ onPress }: PropsSlide) => {
  const { spending, energy } = useTypedSelector(state => state.onboarding);
  const [clothes, setClothes] = useState(spending.clothes);
  const [furniture, setFurniture] = useState(spending.furniture);
  const [hobbies, setHobbies] = useState(spending.others);

  const dispatch = useDispatch();

  const handlePress = () => {
    onPress();
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
            <Text variant="body">{clothes} € / month (clothes)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setClothes(value)}
              value={clothes}
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
            <Text variant="body">{furniture} € / month (furnitures)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setFurniture(value)}
              value={furniture}
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
            <Text variant="body">{hobbies} € / month (hobbies)</Text>
            <SliderOnboarding
              onValueChange={(value: number) => setHobbies(value)}
              value={hobbies}
              step={10}
              maximumValue={1000}
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

export default SpendingSettingScreen;
