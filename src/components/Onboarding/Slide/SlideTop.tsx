import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Text, useTheme } from '../../Theme';

type PropsSlideTop = {
  text: string;
};

const SlideTop = ({ text }: PropsSlideTop) => {
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();

  const style = StyleSheet.create({
    container: {
      height: height / 3,
      width,
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      top: 0,
      borderBottomLeftRadius: 75,
    },
    titleContainer: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: (height / 3 - 450) / 2 },
        { translateX: width / 1.8 },
      ],
    },
  });
  return (
    <View style={style.container}>
      <Text style={style.titleContainer} variant="titleTopSlide">
        {text}
      </Text>
    </View>
  );
};

export default SlideTop;
