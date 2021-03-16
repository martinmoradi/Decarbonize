import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useTheme } from '../../Theme';

const SlideTop = () => {
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();

  const style = StyleSheet.create({
    container: {
      height: height / 3,
      flex: 1,
      width,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      top: 0,
      borderBottomLeftRadius: 75,
    },
  });
  return <View style={style.container} />;
};

export default SlideTop;
