import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = {
  ...RoundedIcon.defaultProps,
};

export default RoundedIconButton;
