import React from 'react';
import { Slider } from 'react-native-elements';
import { useTheme } from '../../components/Theme';
import { PropsSliderOnboarding } from '../onboardingTypes';
import { AuthNavigationProps } from '../../components/routers/NavigationTypes';
import { OnboardingFoodActionType } from '../../redux/types'

// type AuthNavigationProps= {
//   onValueChange: Dispatch<SetStateAction<number>>;
//   value: number;
//   step: number;
//   maximumValue: number;
//   minimumValue: number;
//   field: string;
// };

const SliderOnboarding = ({
  onValueChange,
  value,
  step,
  maximumValue,
  minimumValue,
}: PropsSliderOnboarding) => {
  const theme = useTheme();



  const handleChange = () => {
    const dispatchActions = { breakfast: OnboardingFoodActionType.SET_BREAKFAST };
      // continuer toutes les correspondances 
      // dispatch({type: dispatchActions[field], payload:value})
  }
  return (
    <Slider
      animateTransitions
      animationType="timing"
      maximumTrackTintColor="lightgray"
      maximumValue={maximumValue}
      minimumTrackTintColor={theme.colors.primary}
      minimumValue={minimumValue}
      onValueChange={onValueChange}
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
