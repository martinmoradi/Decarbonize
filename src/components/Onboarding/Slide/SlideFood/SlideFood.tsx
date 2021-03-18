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
  const [breakfast, setBreakfast] = useState();
  const [grocery, setGrocery] = useState();
  const [dairy, setDairy] = useState();

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
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 35 },
  });

  const handleSubmit = () => {
    console.log('next');
  };

  const component1 = <Text> Infrequently </Text>;
  const component2 = <Text> Occasionally</Text>;
  const component3 = <Text>Often</Text>;
  const component4 = <Text> Always</Text>;
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
          <View style={{ alignItems: 'center', translateY: -50 }}>
            <IconSvg name="food" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you have a breakfast?
          </Text>
          <View style={{ padding: 6 }}></View>
          <Text variant="body">{breakfast} : per week</Text>
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
            style={{ width: '80%', height: 50 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={breakfast}
          />
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat seasonal groceries?
          </Text>
          <ButtonGroup
            buttons={buttonDiet}
            onPress={setGrocery}
            selectedIndex={grocery}
            selectedButtonStyle={styles.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <View style={{ padding: 6 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you consume dairy products?
          </Text>
          <ButtonGroup
            buttons={buttonDiet}
            onPress={setDairy}
            selectedIndex={dairy}
            selectedButtonStyle={styles.buttonStyle}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
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

export default SlideFood;
