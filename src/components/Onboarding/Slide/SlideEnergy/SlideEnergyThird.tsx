import React, { useContext } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import OnboardingContext from '../../../../Authentication/onboardingContext/OnboardingContext';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsSlide = {
  onPress: () => {};
};

const SlideEnergyThird = ({ onPress }: PropsSlide) => {
  const { energy } = useContext(OnboardingContext);
  const {
    fuel,
    gas,
    wood,
    gasHeating,
    fuelHeating,
    woodHeating,
    onChangeFuel,
    onChangeGas,
    onChangeWood,
  } = energy;

  const getHeatList = (e: number) => {
    const heatList: number[] = [];
    heatList.includes(e) ? heatList.filter(number => number !== e) : heatList.push(e);
  };

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
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 0 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 35 },
  });

  return (
    <View style={styles.container}>
      <View
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
            ENERGY
          </Text>
          <View style={{ alignItems: 'center', translateY: -80 }}>
            <IconSvg name="energyBis" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          {fuelHeating && (
            <>
              <Text variant="body">Fuel</Text>
              <Text variant="body">{fuel} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={onChangeFuel}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={fuel}
              />
            </>
          )}
          {gasHeating && (
            <>
              <View style={{ padding: 6 }}></View>
              <Text variant="body">Gas </Text>
              <Text variant="body">{gas} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={onChangeGas}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={gas}
              />
            </>
          )}
          {woodHeating && (
            <>
              <Text variant="body">Wood</Text>
              <Text variant="body">{wood} € </Text>
              <Slider
                animateTransitions
                animationType="timing"
                maximumTrackTintColor="lightgray"
                maximumValue={300}
                minimumTrackTintColor={theme.colors.primary}
                minimumValue={0}
                onValueChange={onChangeWood}
                orientation="horizontal"
                step={10}
                style={{ width: '80%', height: 40 }}
                thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
                thumbTintColor={theme.colors.info}
                thumbTouchSize={{ width: 40, height: 40 }}
                trackStyle={{ height: 12, borderRadius: 20 }}
                value={wood}
              />
            </>
          )}
        </View>
        <View
          style={{
            flex: 0.9,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergyThird;
