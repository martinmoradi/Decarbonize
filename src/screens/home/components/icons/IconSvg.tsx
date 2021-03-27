import * as React from 'react';
import icons from './icons';

export type PropsIcons = {
  name: keyof typeof icons;
};

const IconSvg = ({ name, ...rest }: PropsIcons) => {
  const Image = icons[name];

  if (!Image) {
    throw new Error(`Icon ${name} does not exist, or is not imported in components/Icon/index.js`);
  }

  return <Image {...rest} />;
};

export default IconSvg;
