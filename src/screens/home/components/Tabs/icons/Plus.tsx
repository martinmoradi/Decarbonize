import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors, IconProps, ICON_SIZE } from './Constants';

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 394 492.5">
      <G
        transform="translate(1 1)"
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        fill={active ? Colors.primary : '#696969'}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M197 97c11,0 20,9 20,20l0 60 60 0c11,0 20,9 20,20 0,11 -9,20 -20,20l-60 0 0 60c0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20l0 -60 -60 0c-11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20l60 0 0 -60c0,-11 9,-20 20,-20z" />
        <Path d="M197 0c109,0 197,88 197,197 0,109 -88,197 -197,197 -109,0 -197,-88 -197,-197 0,-109 88,-197 197,-197zm0 26c94,0 171,77 171,171 0,94 -77,171 -171,171 -94,0 -171,-77 -171,-171 0,-94 77,-171 171,-171z" />
      </G>
    </Svg>
  );
};
