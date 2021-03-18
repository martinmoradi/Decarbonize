import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsFood = {
  onPress: ({ onPress }: PropsFood) => {};
};

const SlideHousing = ({ onPress }: PropsFood) => {
  const [clothes, setClothes] = useState('');
  const [furniture, setFurniture] = useState('');
  const [hobbies, setHobbies] = useState('');

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
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 510) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 0 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
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
            SPENDING
          </Text>
          <View style={{ alignItems: 'center', translateY: -40 }}>
            <IconSvg name="habit" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How much do you spend monthly for clothes ?</Text>
          <Text variant="body">{clothes} €</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setClothes}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={clothes}
          />
          <Text variant="body">How much do you spend monthly for furniture ?</Text>
          <Text variant="body">{furniture} €</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setFurniture}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={furniture}
          />
          <Text variant="body">How much do you spend monthly for hobbies ?</Text>
          <Text variant="body">{hobbies} €</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={1000}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setHobbies}
            orientation="horizontal"
            step={10}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={hobbies}
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

export default SlideHousing;
