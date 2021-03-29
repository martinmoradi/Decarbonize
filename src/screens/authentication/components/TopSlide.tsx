import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Text, useTheme } from '../../../components/';
import { IconSvg } from '../../home/components';
import { PropsSlideTop } from '../types';

const SlideTitle = ({ title, svgTitle, isReversed }: PropsSlideTop) => {
  const theme = useTheme();
  let titleStyle = { titleTransform: { transform: [] } };

  const generateStyles = () => {
    switch (title) {
      case 'FOOD':
        if (isReversed) {
          styles.titleLeft.transform[0] = { rotate: '-90deg' };
          styles.titleLeft.transform[1] = { translateY: hp('-25%') };
          styles.titleLeft.transform[2] = { translateX: wp('-6%') };
        } else {
          styles.titleRight.transform[0] = { rotate: '-90deg' };
          styles.titleRight.transform[1] = { translateY: hp('-50%') };
          styles.titleRight.transform[2] = { translateX: wp('54%') };
        }
        break;
      case 'ENERGY':
        if (isReversed) {
          styles.titleLeft.transform[0] = { rotate: '-90deg' };
          styles.titleLeft.transform[1] = { translateY: hp('-25%') };
          styles.titleLeft.transform[2] = { translateX: wp('-6%') };
        } else {
          styles.titleRight.transform[0] = { rotate: '90deg' };
          styles.titleRight.transform[1] = { translateY: hp('-24%') };
          styles.titleRight.transform[2] = { translateX: wp('54%') };
        }
        break;
      case 'SPENDING':
        if (isReversed) {
          styles.titleLeft.transform[0] = { rotate: '-90deg' };
          styles.titleLeft.transform[1] = { translateY: hp('-25%') };
          styles.titleLeft.transform[2] = { translateX: wp('-6%') };
        } else {
          styles.titleRight.transform[0] = { rotate: '90deg' };
          styles.titleRight.transform[1] = { translateY: hp('-24%') };
          styles.titleRight.transform[2] = { translateX: wp('54%') };
        }
        break;
    }
  };

  const leftTransformY = () => {
    switch (title) {
      case 'FOOD':
        return hp('-25%');
      case 'ENERGY':
        return hp('-24%');
      case 'SPENDING':
        return hp('-25%');
      default:
        return hp('-23%');
    }
  };

  const leftTransformX = () => {
    switch (title) {
      case 'FOOD':
        return wp('5%');
      case 'ENERGY':
        return wp('-4%');
      case 'SPENDING':
        return wp('-9%');
      default:
        return wp('-6%');
    }
  };

  const rightTransformY = () => {
    switch (title) {
      case 'FOOD':
        return hp('-24%');
      case 'ENERGY':
        return hp('-24%');
      case 'SPENDING':
        return hp('-24%');
      default:
        return hp('-24%');
    }
  };

  const rightTransformX = () => {
    switch (title) {
      case 'FOOD':
        return wp('62%');
      case 'ENERGY':
        return wp('62%');
      case 'SPENDING':
        return wp('54%');
      default:
        return wp('54%');
    }
  };

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
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : leftTransformY() },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : leftTransformX() },
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
          translateY: Platform.OS === 'ios' ? (height / 3 - 650) / 2 : rightTransformY(),
        },
        { translateX: Platform.OS === 'ios' ? width / 2 + 75 : rightTransformX() },
      ],
    },
  });

  return (
    <>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></Box>
      <Box style={theme.slideStyle.slider}>
        <Box style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></Box>
        <Box
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
          <Box style={{ alignItems: 'center', translateY: hp('-4%') }}>
            <IconSvg name={svgTitle} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SlideTitle;
