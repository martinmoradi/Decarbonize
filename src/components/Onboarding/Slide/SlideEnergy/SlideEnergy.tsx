import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup, Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import OnboardingContext from '../../../../context/OnboardingContext';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsFood = {
  onPress: () => {};
};

const SlideEnergy = ({ onPress }: PropsFood) => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedIndex2, setSelectedIndex2] = useState();
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();
  const { energy } = useContext(OnboardingContext);
  console.log('energy:', energy);
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
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const handleSubmit = () => {
    console.log('next');
  };

  const buttonsPeople = ['1', '2', '3', '4+'];

  const buttonsHeat = ['Fioul', 'Gas', 'Wood', 'Solor panel'];
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
          <View style={{ alignItems: 'center', translateY: -98 }}>
            <IconSvg name="energy" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <ButtonGroup
            selectedButtonStyle={styles.buttonStyle}
            buttons={buttonsPeople}
            selectedIndex={selectedIndex}
            onPress={setSelectedIndex}
          />
          <Text variant="body">What is the surface are of your housing?</Text>
          <Text variant="body">Value : {surface}</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={300}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={20}
            onValueChange={setSurface}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 60 }}
            thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={surface}
          />
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            onPress={setSelectedIndex2}
            selectedIndex={selectedIndex2}
            selectedButtonStyle={styles.buttonStyle}
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

export default SlideEnergy;
