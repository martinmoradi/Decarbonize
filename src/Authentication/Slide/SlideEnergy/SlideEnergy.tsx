import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';
import SliderOnboarding from '../../components/SliderOnboarding';

const SlideEnergy = ({ onPress }: PropsSlide) => {
  const { width } = Dimensions.get('window');
  const theme = useTheme();
  const { energy } = useContext(OnboardingContext);
  const { onChangePeople, onChangeSurface } = energy;

  const [surfaceValue, setSurfaceValue] = useState<number>(0);
  const [peopleValue, setPeopleValue] = useState<number>(0);

  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
  });

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={false} />

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <Text variant="body">{peopleValue} </Text>
          <SliderOnboarding
            onValueChange={setPeopleValue}
            onSlidingComplete={onChangePeople}
            value={peopleValue}
            step={1}
            maximumValue={10}
            minimumValue={0}
          />
          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">What is the area of your housing?</Text>
          <Text variant="body">{surfaceValue} m²</Text>
          <SliderOnboarding
            onValueChange={setSurfaceValue}
            onSlidingComplete={onChangeSurface}
            value={surfaceValue}
            step={5}
            maximumValue={300}
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

export default SlideEnergy;
