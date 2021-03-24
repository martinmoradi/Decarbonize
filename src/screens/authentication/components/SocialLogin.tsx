import React, { ReactNode } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Box, useTheme } from '../../../components';
import { palette } from '../../../components/Theme';

const Google = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M19.767 10.21c0-.683-.056-1.368-.174-2.039h-9.476v3.863h5.426a4.642 4.642 0 01-2.008 3.047v2.506h3.238c1.9-1.746 2.994-4.326 2.994-7.378z"
      fill="#4285F4"
    />
    <Path
      d="M10.07 20c2.71 0 4.996-.887 6.661-2.417l-3.238-2.502c-.901.611-2.064.957-3.42.957-2.621 0-4.844-1.762-5.642-4.132H1.09v2.58A10.055 10.055 0 0010.07 20z"
      fill="#34A853"
    />
    <Path
      d="M4.436 11.963a5.986 5.986 0 010-3.848v-2.59h-3.36a10.005 10.005 0 000 9.028l3.36-2.59z"
      fill="#FBBC04"
    />
    <Path
      d="M10.079 3.96a5.482 5.482 0 013.858 1.5l2.872-2.856A9.696 9.696 0 0010.08 0a10.063 10.063 0 00-8.99 5.515l3.342 2.577c.794-2.371 3.023-4.132 5.647-4.132z"
      fill="#EA4335"
    />
  </Svg>
);

const Facebook = () => (
  <Svg width={10} height={18} viewBox="0 0 10 18" fill="none">
    <Path
      d="M6.067 18V9.79h2.756l.413-3.2H6.067V4.546c0-.927.258-1.558 1.586-1.558h1.695V.125A22.65 22.65 0 006.878 0C4.436 0 2.763 1.491 2.763 4.23v2.36H0v3.2h2.763V18h3.304z"
      fill="#3C5A99"
    />
  </Svg>
);

const Apple = () => (
  <Svg width={18} height={20} viewBox="0 0 18 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.832 3.199C12.58 2.334 12.954 1.4 12.954.4c0-.133-.006-.266-.022-.4-.52.026-1.073.18-1.658.458a4.572 4.572 0 00-1.45 1.061c-.76.84-1.189 1.868-1.189 2.828 0 .133.009.26.024.38 1.182.093 2.272-.5 3.173-1.528zm3.976 14.32c.425-.591.793-1.234 1.103-1.933.128-.296.248-.605.362-.927a4.683 4.683 0 01-1.42-.909c-.933-.843-1.408-1.905-1.422-3.18-.015-1.64.748-2.916 2.291-3.828-.862-1.195-2.158-1.859-3.883-1.994-.637-.053-1.414.08-2.335.404-.974.348-1.548.523-1.718.523-.226 0-.743-.15-1.549-.444-.807-.294-1.457-.443-1.953-.443a5.12 5.12 0 00-2.525.695A5.166 5.166 0 00.892 7.325C.297 8.294 0 9.45 0 10.79c0 1.17.22 2.379.66 3.627.41 1.155.933 2.169 1.57 3.043.594.819 1.09 1.396 1.486 1.733.62.563 1.242.831 1.866.805.41-.013.947-.15 1.613-.413.665-.262 1.287-.392 1.867-.392.552 0 1.157.13 1.815.392.655.263 1.219.392 1.686.392.65-.015 1.258-.275 1.825-.784.366-.31.84-.867 1.42-1.674z"
      fill="#000"
    />
  </Svg>
);

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <Box
      marginHorizontal="s"
      style={{ backgroundColor: palette.white }}
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
