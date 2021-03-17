import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Icon, Slider } from 'react-native-elements';
import { Text, useTheme } from '../../../Theme';
const SlideFood = () => {
  const [value, setValue] = useState('');
  const theme = useTheme();
  const { height, width } = Dimensions.get('window');
  // const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    slider: {
      height: height / 3,
    },
    footer: {
      flex: 1,
      borderTopLeftRadius: 100,
      backgroundColor: 'white',
    },
    title: {
      justifyContent: 'center',
      transform: [
        { rotate: '90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - 600) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 30 },
      ],
    },
    content: { maxWidth: width - 20, alignItems: 'center', marginTop: 50 },
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={styles.slider}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderBottomRightRadius: 75,
            flex: 1,
          }}
        >
          <Text style={styles.title} variant="titleTopSlide">
            FOOD
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.content}>
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
        </View>
      </View>
    </View>
  );
};

export default SlideFood;
