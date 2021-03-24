import * as React from 'react';
import * as icons from '../icons/icons';

type PropsIcons = {
  name: string;
};

const IconSvg = ({ name, ...rest }: PropsIcons) => {
  const Image = icons[name];

  if (!Image) {
    throw new Error(`Icon ${name} does not exist, or is not imported in components/Icon/index.js`);
  }

  return <Image {...rest} />;
};

export default IconSvg;
