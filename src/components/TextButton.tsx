import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import {} from 'react-native-gesture-handler'

interface ButtonProps {
  variant?: 'default' | 'primary';
  label?: string | JSX.Element;
  onPress: () => void;
  style?: RectButtonProperties['style'];
}

const TextButton = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        height: 30,
        width: 60,
        borderRadius: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'black' }}>{label}</Text>
    </TouchableOpacity>
  );
};
export default TextButton;
