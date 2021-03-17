import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, TextInput, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

const SlideEnergy = () => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedIndex2, setSelectedIndex2] = useState();
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
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 550) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 52 },
      ],
    },
    content: { maxWidth: width - 20, alignItems: 'center', marginTop: 50 },
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
            borderBottomLeftRadius: 75,
            flex: 1,
          }}
        >
          <Text style={styles.title} variant="titleTopSlide">
            ENERGY
          </Text>
          <View style={{ alignItems: 'center' }}>
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
          <TextInput onChangeText={e => setSurface(e)} value={surface} />
          <Text variant="body">How do you heat your housing?</Text>
          <ButtonGroup
            buttons={buttonsHeat}
            onPress={setSelectedIndex2}
            selectedIndex={selectedIndex2}
            selectedButtonStyle={styles.buttonStyle}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button variant="default" onPress={handleSubmit} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergy;
