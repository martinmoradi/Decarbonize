import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideHousing = ({ onPress }: PropsSlide) => {
  const { spending } = useContext(OnboardingContext);
  const { onChangeClothes, onChangeFurniture, onChangeHobbies } = spending;

  const { height, width } = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slider: {
      height: height / 3,
    },
    footer: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },
    buttonStyle: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
    },
    title: {
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 0 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const [clothValue, setClothValue] = useState<number>(0);
  const [furnitureValue, setFurnitureValue] = useState<number>(0);
  const [hobbiesValue, setHobbiesValue] = useState<number>(0);
  return (
    <View style={styles.container}>
      <SlideTitle title="SPENDING" svgTitle="habit" isReversed={false} />
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How much do you spend for clothes ?</Text>
          <Text variant="body">{clothValue} € / month</Text>
          <SliderOnboarding
            onValueChange={setClothValue}
            onSlidingComplete={onChangeClothes}
            value={clothValue}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />

          <View style={{ padding: 10 }}></View>
          <Text variant="body">How much do you spend for furniture ?</Text>
          <Text variant="body">{furnitureValue} € / month</Text>
          <SliderOnboarding
            onValueChange={setFurnitureValue}
            onSlidingComplete={onChangeFurniture}
            value={furnitureValue}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />

          <View style={{ padding: 10 }}></View>
          <Text variant="body">How much do you spend for hobbies ?</Text>
          <Text variant="body">{hobbiesValue} € / month</Text>
          <SliderOnboarding
            onValueChange={setHobbiesValue}
            onSlidingComplete={onChangeHobbies}
            value={hobbiesValue}
            step={10}
            maximumValue={1000}
            minimumValue={0}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideHousing;
