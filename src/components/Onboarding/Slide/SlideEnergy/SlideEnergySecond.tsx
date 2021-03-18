import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup, Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsFood = {
  onPress: () => {};
};

const SlideEnergySecond = ({ onPress }: PropsFood) => {
  const [heat, setHeat] = useState([]);
  const [consumption, setConsumption] = useState();
  const [wood, setWood] = useState();

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
      borderTopLeftRadius: 100,
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
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 35 },
  });

  const buttonsHeat = ['Fioul', 'Gas', 'Wood'];
  const buttonsWood = ['Wood logs', 'Wood pellets'];

  const WoodEnergy = () => (
    <>
      <View style={{ padding: 6 }}></View>
      <Text variant="body">Which type of wood ?</Text>
      <ButtonGroup
        buttons={buttonsWood}
        onPress={getHeatList}
        selectedIndex={wood}
        selectedButtonStyle={styles.buttonStyle}
        textStyle={{ textAlign: 'center' }}
        containerStyle={{ borderWidth: 0 }}
        innerBorderStyle={{ width: 0 }}
      />
      <View style={{ padding: 6 }}></View>
    </>
  );
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
            borderBottomRightRadius: 75,
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
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            selectMultiple={true}
            onPress={setHeat}
            selectedIndexes={heat}
            selectedButtonStyle={styles.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <View style={{ padding: 6 }}></View>
          {heat.includes(2) && <WoodEnergy />}
          <Text variant="body">What is your monthly energy consumption ? </Text>
          <Text variant="body">{consumption} € </Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={300}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={20}
            onValueChange={setConsumption}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={consumption}
          />
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

export default SlideEnergySecond;
