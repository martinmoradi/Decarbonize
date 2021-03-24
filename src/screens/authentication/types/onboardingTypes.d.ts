export type PropsSlide = {
  onPress: () => void;
};

export type PropsSlideTop = {
  title: string;
  svgTitle: string;
  isReversed: boolean;
};

export type PropsSliderOnboarding = {
  onValueChange: Dispatch<SetStateAction<number>>;
  value: number;
  step: number;
  maximumValue: number;
  minimumValue: number;
};
