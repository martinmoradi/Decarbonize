import {
  createBox,
  createText,
  ThemeProvider as ReStyleThemeProvider,
  useTheme as useReTheme,
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { Platform } from 'react-native';
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';

const { width, height } = Dimensions.get('window');

export const aspectRatio = width / 375;

export const palette = {
  green: '#39D697',
  white: 'white',
  yellow: '#FFC641',
};

const theme = {
  colors: {
    white: palette.white,
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
  borderRadii: {
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
    heroHome: {
      fontSize: 60,
      lineHeight: 60,
      fontFamily: 'Avenir-Bold',
      color: 'background',
      textAlign: 'center',
    },
    subHeroHome: {
      fontSize: 26,
      lineHeight: 26,
      fontFamily: 'Avenir-Semibold',
      color: 'background',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'Avenir-Semibold',
      color: 'secondary',
    },
    titleX: {
      fontSize: 54,
      fontFamily: 'Avenir-Bold',
      color: 'white',
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
    titleTopSlide: {
      fontSize: 38,
      color: 'white',
      fontFamily: 'Avenir-Bold',
      letterSpacing: 2,
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
    titleSlide: {
      height: 100,
      justifyContent: 'center',
      translateY: (height / 3 - 450) / 2,
      rotate: '90deg',
      translateX: width / 3.5,
      // transform: [
      //   { rotate: '90deg' },
      //   { translateY: (height / 3 - 450) / 2 },
      //   { translateX: width / 3.5 },
      // ],
    },
  },

  slideStyle: {
    container: {
      flex: 1,
    },
    slider: {
      height: height / 3,
    },
    footer: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },
    buttonStyle: {
      backgroundColor: palette.green,
      borderRadius: 20,
    },
    title: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  slide: {
    container: {
      padding: 44,
    },
    viewContainer: {
      height: Dimensions.get('window').height,
      justifyContent: 'center',
    },
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


