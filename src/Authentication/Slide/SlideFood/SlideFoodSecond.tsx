import React, { useContext, useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions, StyleSheet, View } from 'react-native';
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
  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  const [vegetarianValue, setVegetarianValue] = useState<number>(0);
  const [veganValue, setVeganValue] = useState<number>(0);

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="FOOD" svgTitle="food" isReversed={true} />

      <View style={theme.slideStyle.footerReverse}>
        <View style={styles.content}>
          <Text variant="body" style={{ lineHeight: 32 }}>
            How much do you eat vegetarian meal ?
          </Text>
          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">{vegetarianValue} / week</Text>
          <SliderOnboarding
            onValueChange={setVegetarianValue}
            onSlidingComplete={onChangeVegetarian}
            value={vegetarianValue}
            step={1}
            maximumValue={14}
            minimumValue={0}
          />

          <View style={{ padding: hp('1%') }}></View>
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
            bottom: hp('2.5%'),
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
