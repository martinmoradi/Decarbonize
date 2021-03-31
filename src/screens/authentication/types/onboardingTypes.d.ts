import { PropsIcons } from '../../home/components/icons/IconSvg';
import icons from '../../home/components/icons/icons';

export type PropsSlide = {
  onPress: () => void;
  goBack: () => void;
};

export type PropsSlideTop = {
  title: string;
  svgTitle: keyof typeof icons;
  isReversed: boolean;
};

export type PropsSliderOnboarding = {
  onValueChange: Dispatch<SetStateAction<number>>;
  value: number;
  step: number;
  maximumValue: number;
  minimumValue: number;
};
