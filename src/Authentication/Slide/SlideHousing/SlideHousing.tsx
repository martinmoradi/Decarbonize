import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';
import IconSvg from '../../../../assets/icons/IconSvg';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';

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
      {/* <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={styles.slider}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderBottomLeftRadius: 75,
            flex: 1,
          }}
        >
          <Text style={styles.title} variant="titleTopSlide">
            SPENDING
          </Text>
          <View style={{ alignItems: 'center', translateY: -40 }}>
            <IconSvg name="habit" />
          </View>
        </View>
      </View> */}
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How much do you spend for clothes ?</Text>
          <Text variant="body">{clothValue} € / month</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setClothValue}
            onSlidingComplete={onChangeClothes}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={clothValue}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body">How much do you spend for furniture ?</Text>
          <Text variant="body">{furnitureValue} € / month</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setFurnitureValue}
            onSlidingComplete={onChangeFurniture}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={furnitureValue}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body">How much do you spend for hobbies ?</Text>
          <Text variant="body">{hobbiesValue} € / month</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setHobbiesValue}
            onSlidingComplete={onChangeHobbies}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={hobbiesValue}
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
