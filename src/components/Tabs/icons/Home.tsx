import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { Colors, IconProps, ICON_SIZE } from './Constants';

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 60">
      <G
        transform="translate(1 1)"
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        fill={active ? Colors.primary : 'none'}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M41.741 21.47L24.752 2.078a1.034 1.034 0 00-1.504 0L6.258 21.47a2.31 2.31 0 001.738 3.833h.734v16.068a4.897 4.897 0 004.892 4.892h20.756a4.897 4.897 0 004.892-4.892V25.303h.734a2.31 2.31 0 001.737-3.833zM37.27 41.371a2.895 2.895 0 01-2.892 2.892H13.622a2.895 2.895 0 01-2.892-2.892V25.303h26.54zm3.016-18.25a.292.292 0 01-.282.182H7.996a.31.31 0 01-.233-.514L24 4.255l16.237 18.534a.293.293 0 01.05.332z" />
        <Path d="M24 42.09a4.728 4.728 0 004.723-4.723v-4.408a4.723 4.723 0 00-9.446 0v4.408A4.728 4.728 0 0024 42.089zm-2.723-9.13a2.723 2.723 0 015.446 0v4.407a2.723 2.723 0 11-5.446 0z" />
      </G>
    </Svg>
  );
};
