import React from 'react';
import { Slider } from 'react-native-elements';
import { useTheme } from '../../components/Theme';
import { PropsSliderOnboarding } from '../onboardingTypes';

const SliderOnboarding = ({
  onValueChange,
  onSlidingComplete,
  value,
  step,
  maximumValue,
  minimumValue,
}: PropsSliderOnboarding) => {
  const theme = useTheme();
  return (
    <Slider
      animateTransitions
      animationType="timing"
      maximumTrackTintColor="lightgray"
      maximumValue={maximumValue}
      minimumTrackTintColor={theme.colors.primary}
      minimumValue={minimumValue}
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
      orientation="horizontal"
      step={step}
      style={{ width: '80%', height: 40 }}
      thumbStyle={{ height: 20, width: 10, borderWidth: 2, borderColor: 'black' }}
      thumbTintColor={theme.colors.info}
      thumbTouchSize={{ width: 40, height: 40 }}
      trackStyle={{ height: 12, borderRadius: 20 }}
      value={value}
    />
  );
};

export default SliderOnboarding;
