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

const SlideFood = ({ onPress }: PropsSlide) => {
  const { food } = useContext(OnboardingContext);
  const {
    breakfast,
    redMeat,
    whiteMeat,
    onChangeBreakfast,
    onChangeRedMeat,
    onChangeWhiteMeat,
  } = food;

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
        {
          translateY:
            Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - height / 1.3) / 2,
        },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 1.7 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
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
            FOOD
          </Text>
          <View style={{ alignItems: 'center', translateY: -45 }}>
            <IconSvg name="food" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you have a breakfast ?
          </Text>
          <Text variant="body">{breakfast} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={7}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={onChangeBreakfast}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={breakfast}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How often do you eat red meat ?
          </Text>
          <Text variant="body">{redMeat} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={onChangeRedMeat}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={redMeat}
          />
          <View style={{ padding: 10 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat white meat ?
          </Text>
          <Text variant="body">{whiteMeat} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={onChangeWhiteMeat}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={whiteMeat}
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

export default SlideFood;
