import React, { useContext, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { ButtonGroup, Slider } from 'react-native-elements';
import OnboardingContext from '../../onboardingContext/OnboardingContext';
import Button from '../../../components/Button';
import { Text, useTheme } from '../../../components/Theme';
import { PropsSlide } from '../../onboardingTypes';
import SlideTitle from '../SlideTop/SlideTitle';

const SlideEnergy = ({ onPress }: PropsSlide) => {
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();
  const { energy } = useContext(OnboardingContext);
  const { people, onChangePeople, onChangeSurface } = energy;

  const [surfaceValue, setSurfaceValue] = useState<number>(0);

  const handleChangePeople = (e: number) => {
    onChangePeople(e + 1);
  };

  const styles = StyleSheet.create({
    footer: {
      flex: 1,
      borderTopRightRadius: 100,
      backgroundColor: 'white',
    },

    title: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 450) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 16 },
      ],
    },
    content: { maxWidth: width - 0, alignItems: 'center', marginTop: 50 },
  });

  const buttonsPeople = ['1', '2', '3', '4+'];

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="Energy" svgTitle="energy" isReversed={false} />
      {/* <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <View style={theme.slideStyle.slider}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white' }}></View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            borderBottomLeftRadius: 75,
            flex: 1,
          }}
        >
          <Text style={styles.title} variant="titleTopSlide">
            ENERGY
          </Text>
          <View style={{ alignItems: 'center', translateY: -98 }}>
            <IconSvg name="energy" />
          </View>
        </View>
      </View> */}
      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <ButtonGroup
            selectedButtonStyle={theme.slideStyle.buttonStyle}
            buttons={buttonsPeople}
            selectedIndex={people - 1}
            onPress={handleChangePeople}
            textStyle={{ textAlign: 'center' }}
            containerStyle={{ borderWidth: 0 }}
            innerBorderStyle={{ width: 0 }}
          />
          <Text variant="body">What is the surface are of your housing?</Text>
          <Text variant="body">{surfaceValue} m²</Text>
          <Slider
            animateTransitions
            animationType="timing"
            maximumTrackTintColor="lightgray"
            maximumValue={300}
            minimumTrackTintColor={theme.colors.primary}
            minimumValue={20}
            onValueChange={setSurfaceValue}
            onSlidingComplete={onChangeSurface}
            orientation="horizontal"
            step={5}
            style={{ width: '80%', height: 40 }}
            thumbStyle={{ height: 20, width: 20, borderWidth: 2, borderColor: 'black' }}
            thumbTintColor={theme.colors.info}
            thumbTouchSize={{ width: 40, height: 40 }}
            trackStyle={{ height: 12, borderRadius: 20 }}
            value={surfaceValue}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergy;
