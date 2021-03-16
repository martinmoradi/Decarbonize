import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Box, Text } from '../../../Theme';

const SlideFood = () => {
  const [value, setValue] = useState('');

  const { height, width } = Dimensions.get('window');
  // const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      // height: height / 3,
      padding: 44,
    },
    title: {
      height: 100,
      // marginRight: -140,
      // marginTop: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 550) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2.5 : width / 3 },
      ],
    },
  });
  return (
    <Box style={{ padding: 44 }}>
      <Text style={styles.title} variant="titleTopSlide">
        FOOD
      </Text>
      <Box style={{ height: height, justifyContent: 'center' }}>
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
    </Box>
  );
};

export default SlideFood;
