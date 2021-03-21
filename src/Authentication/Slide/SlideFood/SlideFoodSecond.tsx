import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideFoodSecond = ({ onPress }: PropsSlide) => {
  const { food } = useContext(OnboardingContext);
  const { onChangeVegetarian, onChangeVegan } = food;

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
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const [vegetarianValue, setVegetarianValue] = useState<number>(0);
  const [veganValue, setVeganValue] = useState<number>(0);

  return (
    <View style={styles.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={true} />

      <View style={styles.footer}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegetarian meal ?
          </Text>
          <View style={{ padding: 6 }}></View>
          <Text variant="body">{vegetarianValue} / week</Text>
          <SliderOnboarding
            onValueChange={setVegetarianValue}
            onSlidingComplete={onChangeVegetarian}
            value={vegetarianValue}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />

          <View style={{ padding: 6 }}></View>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegan meal ? ?
          </Text>
          <Text variant="body">{veganValue} / week</Text>
          <SliderOnboarding
            onValueChange={setVeganValue}
            onSlidingComplete={onChangeVegan}
            value={veganValue}
            step={1}
            maximumValue={14}
            minimumValue={0}
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

export default SlideFoodSecond;
