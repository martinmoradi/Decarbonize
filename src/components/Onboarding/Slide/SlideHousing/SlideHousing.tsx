import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

const SlideHousing = () => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const [selectedIndexClothes, setSelectedClothes] = useState();
  const [selectedIndexFurniture, setSelectedFurniture] = useState();
  const [selectedIndexHobbies, setSelectedHobbies] = useState();
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
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 500) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 15 },
      ],
    },
    content: { maxWidth: width - 20, alignItems: 'center', marginTop: 50 },
  });

  const handleSubmit = () => {
    console.log('next');
  };

  const buttonClothes = ['0-50 €', '50-150 €', '>150€'];
  const buttonFurniture = ['0-50 €', '50-150 €', '>150€'];
  const buttonHobbies = ['0-50 €', '50-150 €', '>150€'];

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
            HABITS
          </Text>
          <View style={{ alignItems: 'center' }}>
            <IconSvg name="habit" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How much do you spend monthly for clothes ?</Text>
          <ButtonGroup
            selectedButtonStyle={styles.buttonStyle}
            buttons={buttonClothes}
            selectedIndex={selectedIndexClothes}
            onPress={setSelectedClothes}
          />
          <Text variant="body">How much do you spend monthly for furniture ?</Text>
          <ButtonGroup
            selectedButtonStyle={styles.buttonStyle}
            buttons={buttonFurniture}
            selectedIndex={selectedIndexFurniture}
            onPress={setSelectedFurniture}
          />
          <Text variant="body">How much do you spend monthly for hobbies ?</Text>
          <ButtonGroup
            selectedButtonStyle={styles.buttonStyle}
            buttons={buttonHobbies}
            selectedIndex={selectedIndexHobbies}
            onPress={setSelectedHobbies}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button variant="default" onPress={handleSubmit} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideHousing;
