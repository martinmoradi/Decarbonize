import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Box, Text, useTheme } from '../../../Theme';

const SlideFood = () => {
  const [value, setValue] = useState('');

  const { height, width } = Dimensions.get('window');
  const theme = useTheme();

  const style = StyleSheet.create({
    container: {
      // height: height / 3,
      padding: 44,
    },
    titleContainer: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: (height / 3 - 450) / 2 },
        { translateX: width / 3.5 },
      ],
    },
  });
  return (
    <View style={theme.slide.container}>
      <Text style={style.titleContainer} variant="titleTopSlide">
        FOOD
      </Text>
      <Box style={theme.slide.viewContainer}>
        <Text variant="body">How often do you have a breakfast per week?</Text>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={50}
          minimumValue={20}
          step={1}
          trackStyle={{ height: 10, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
                name="hamburger"
                type="font-awesome-5"
                size={10}
                reverse
                containerStyle={{ bottom: 10, right: 10 }}
                color="gray"
              />
            ),
          }}
        />
        <Text variant="body">How would you describe your diet?</Text>
        <Text variant="body"></Text>
      </Box>
    </View>
  );
};

export default SlideFood;
