import React from 'react';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from '../../../components/Theme';
import IconSvg from '../../../../assets/icons/IconSvg';
import { PropsSlideTop } from '../../onboardingTypes';

const SlideTitle = ({ title, svgTitle, isReversed }: PropsSlideTop) => {
  const theme = useTheme();
  const { height, width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    footerRight: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },

    footerLeft: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },

    title: {
      height: 100,
      justifyContent: 'center',
    },

    titleLeft: {
      transform: [
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
      ],
    },

    borderRight: {
      borderBottomRightRadius: 75,
    },

    borderLeft: {
      borderBottomLeftRadius: 75,
    },

    titleRight: {
      transform: [
        { rotate: '90deg' },
        {
          translateY:
            Platform.OS === 'ios' ? (height / 3 - 650) / 2 : (height / 3 - height / 1.3) / 2,
        },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : width / 2 + 30 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  return (
    <>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={theme.slideStyle.slider}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></View>
        <View
          style={[
            {
              backgroundColor: theme.colors.primary,
              flex: 1,
            },
            isReversed ? styles.borderRight : styles.borderLeft,
          ]}
        >
          <Text
            style={(styles.title, isReversed ? styles.titleLeft : styles.titleRight)}
            variant="titleTopSlide"
          >
            {title}
          </Text>
          <View style={{ alignItems: 'center', translateY: -45 }}>
            <IconSvg name={svgTitle} />
          </View>
        </View>
      </View>
    </>
  );
};

export default SlideTitle;
