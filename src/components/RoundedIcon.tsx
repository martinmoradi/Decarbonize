// @ts-nocheck
import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { Box, Text, Theme } from './Theme';

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor?: keyof Theme['colors'];
  iconRatio: number;
  align: 'center' | 'flex-start' | 'flex-end';
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems={align}
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  align: 'center',
};

export default RoundedIcon;
