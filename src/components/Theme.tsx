import {
  createBox,
  createText,
  ThemeProvider as ReStyleThemeProvider,
  useTheme as useReTheme,
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

export const aspectRatio = width / 375;

export const palette = {
  green: '#39D697',
  white: 'white',
  yellow: '#FFC641',
};

const theme = {
  colors: {
    primary: palette.green,
    primaryLight: '#A9EFD2',
    secondary: '#0C0D34',
    danger: '#FF0058',
    info: '#808080',
    text: 'rgba(12, 13, 52, 0.7)',
    textContrast: palette.white,
    background: palette.white,
    background2: '#F6F6F6',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRad: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'Avenir-Bold',
      color: 'background',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'Avenir-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'Avenir-Semibold',
      color: 'secondary',
    },
    title3: {
      fontSize: 16,
      fontFamily: 'Avenir-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Avenir-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'Avenir-Regular',
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: 'Avenir-Semibold',
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(styles: (theme: Theme) => T) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
