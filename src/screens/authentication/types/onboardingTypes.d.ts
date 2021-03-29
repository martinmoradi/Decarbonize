import { PropsIcons } from '../../home/components/icons/IconSvg';

export type PropsSlide = {
  onPress: () => void;
  goBack: () => void;
};

export type PropsSlideTop = {
  title: string;
  svgTitle: PropsIcons;
  isReversed: boolean;
};

export type PropsSliderOnboarding = {
  onValueChange: Dispatch<SetStateAction<number>>;
  value: number;
  step: number;
  maximumValue: number;
  minimumValue: number;
};
