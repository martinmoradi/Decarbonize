import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup, Slider } from 'react-native-elements';
import IconSvg from '../../../../../assets/icons/IconSvg';
import Button from '../../../Button';
import { Text, useTheme } from '../../../Theme';

type PropsFood = {
  onPress: () => {};
};
const SlideFood = ({ onPress }: PropsFood) => {
  const [breakfast, setBreakfast] = useState('');
  const [diet, setDiet] = useState();

  const theme = useTheme();
  const { height, width } = Dimensions.get('window');

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
    btnContainer: {
      borderWidth: 0,
    },
    title: {
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 500) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 30 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 60 },
  });

  const handleSubmit = () => {
    console.log('next');
  };

  const component1 = <Text>Meat lover</Text>;
  const component2 = <Text>Meat in some meals</Text>;
  const component3 = <Text>Vegetarian</Text>;
  const component4 = <Text>Vegan</Text>;
  const buttonDiet = [component1, component2, component3, component4];

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
            FOOD
          </Text>
          <View style={{ alignItems: 'center', translateY: -40 }}>
            <IconSvg name="food" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body">How often do you have a breakfast per week?</Text>
          <Text variant="body">Value : {breakfast}</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={7}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={setBreakfast}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 60 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={breakfast}
          />
          <Text variant="body">How would you describe your diet?</Text>
          <ButtonGroup
            buttons={buttonDiet}
            onPress={setDiet}
            selectedIndex={diet}
            selectedButtonStyle={styles.buttonStyle}
          />
          <Text variant="body"></Text>
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

export default SlideFood;
