import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
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
  const { people, onChangePeople, onChangeSurface } = energy;

  const [surfaceValue, setSurfaceValue] = useState<number>(0);

  const handleChangePeople = (e: number) => {
    onChangePeople(e + 1);
  };

  const styles = StyleSheet.create({
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const buttonsPeople = ['1', '2', '3', '4+'];

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={false} />

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <ButtonGroup
            selectedButtonStyle={theme.slideStyle.buttonStyle}
            buttons={buttonsPeople}
            selectedIndex={people - 1}
            onPress={handleChangePeople}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <Text variant="body">What is the surface are of your housing?</Text>
          <Text variant="body">{surfaceValue} m²</Text>
          <SliderOnboarding
            onValueChange={setSurfaceValue}
            onSlidingComplete={onChangeSurface}
            value={surfaceValue}
            step={5}
            maximumValue={300}
            minimumValue={20}
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

export default SlideEnergy;
