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
const SlideFood2 = ({ onPress }: PropsSlide) => {
  const { food } = useContext(OnboardingContext);
  const { vegetarian, vegan, onChangeVegetarian, onChangeVegan } = food;

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
      borderTopLeftRadius: 100,
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
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 500) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
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
            borderBottomRightRadius: 75,
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
            How much do you eat vegetarian meal ?
          </Text>
          <View style={{ padding: 6 }}></View>
          <Text variant="body">{vegetarian} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={onChangeVegetarian}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 50 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={vegetarian}
          />
          <View style={{ padding: 6 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegan meal ? ?
          </Text>
          <Text variant="body">{vegan} : per week</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={14}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={0}
            onValueChange={onChangeVegan}
            orientation="horizontal"
            step={1}
            style={{ width: '80%', height: 50 }}
            thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={vegan}
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

export default SlideFood2;
