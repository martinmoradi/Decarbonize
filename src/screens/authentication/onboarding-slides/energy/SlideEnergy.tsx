import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { Box, Text, useTheme } from '../../../../components/Theme';
import { useTypedSelector } from '../../../../hooks';
import { OnboardingEnergyActionType } from '../../../../redux/types';
import { SliderOnboarding } from '../../components';
import SlideTitle from '../../components/TopSlide';
import { PropsSlide } from '../../types';

const SlideEnergy = ({ onPress, goBack }: PropsSlide) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { energy } = useTypedSelector(state => state.onboarding);
  const [roommates, setRoommates] = useState(energy.roommates);
  const [houseSurface, setHouseSurface] = useState(energy.house_surface);

  const handlePress = () => {
    dispatch({ type: OnboardingEnergyActionType.SET_ROOMMATES, payload: roommates });
    dispatch({ type: OnboardingEnergyActionType.SET_HOUSE_SURFACE, payload: houseSurface });
    onPress();
  };

  const generateText = () => {
    switch (roommates) {
      case 1:
        return (
          <Text variant="body">
            I live<Text variant="bodyHighlight">alone</Text>
          </Text>
        );
    }
  };

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="Energy" isReversed={false} />
      <Box style={{ position: 'absolute', top: hp(3), left: wp(2) }}>
        <TouchableOpacity
          onPress={goBack}
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <Ionicons name="chevron-back-circle-outline" size={24} color="white" />
          <Text color="white" variant="button">
            back
          </Text>
        </TouchableOpacity>
      </Box>
      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="bodySemiBold" style={{ marginTop: hp(2) }}>
            How many people live in your household?
          </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setRoommates(value)}
            value={roommates}
            step={1}
            maximumValue={10}
            minimumValue={1}
          />
          {roommates === 1 ? (
            <Text variant="body">
              I live<Text variant="bodyHighlight"> alone</Text>.
            </Text>
          ) : (
            <Text variant="body">
              There is <Text variant="bodyHighlight">{roommates} </Text>of us living in my home.
            </Text>
          )}
          <Box marginTop="xl"></Box>
          <Text variant="bodySemiBold">What is the area of your housing?</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setHouseSurface(value)}
            value={houseSurface}
            step={5}
            maximumValue={300}
            minimumValue={0}
          />
          <Text variant="body">
            <Text variant="bodyHighlight">{houseSurface}</Text> m²
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: hp('2.5%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button variant="default" style={styles.button} onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergy;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  button: { marginBottom: 10 },
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
});
