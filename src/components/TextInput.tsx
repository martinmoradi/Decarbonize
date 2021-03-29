// @ts-nocheck
import { Feather as Icon } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import RoundedIcon from './RoundedIcon';
import { Box, Text, useTheme } from './Theme';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const validationColor = error ? 'danger' : 'primary';
    const color = !touched ? 'text' : validationColor;
    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={color}
        padding="s"
      >
        <Box padding="s">
          <Text {...{ color }}>
            <Icon name={icon} size={16} />
          </Text>
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={theme.colors[color]}
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? 'check' : 'x'}
            size={SIZE}
            backgroundColor={!error ? 'primary' : 'danger'}
            color="background"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
