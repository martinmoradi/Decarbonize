import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors, IconProps, ICON_SIZE } from './Constants';

export default ({ active }: IconProps) => {
  return (
    <Svg viewBox="0 0 48 60" width={ICON_SIZE} height={ICON_SIZE}>
      <G
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        fill={active ? Colors.primary : 'none'}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M45.338 12.432H38.44a8.557 8.557 0 00-16.999 0H2.662a1 1 0 000 2h18.78a8.557 8.557 0 0017 0h6.896a1 1 0 000-2zm-15.396 7.563a6.563 6.563 0 116.563-6.563 6.57 6.57 0 01-6.563 6.563zM45.338 33.568h-18.38a8.692 8.692 0 00-8.495-7.563 8.571 8.571 0 00-8.5 7.563h-7.3a1 1 0 100 2h7.3a8.557 8.557 0 0016.999 0h18.376a1 1 0 000-2zM18.463 41.13a6.563 6.563 0 010-13.125 6.65 6.65 0 016.562 6.563 6.57 6.57 0 01-6.562 6.562z" />
      </G>
    </Svg>
  );
};
