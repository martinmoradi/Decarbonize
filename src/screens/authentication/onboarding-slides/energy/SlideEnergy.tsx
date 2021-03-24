import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../../../components/Button';
import { Text, useTheme } from '../../../../components/Theme';
import { PropsSlide } from '../../types';
import SlideTitle from '../../components/TopSlide';
import { SliderOnboarding } from '../../components';
import { useTypedSelector } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { OnboardingEnergyActionType } from '../../../../redux/types';

const SlideEnergy = ({ onPress }: PropsSlide) => {
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

  return (
    <View style={theme.slideStyle.container}>
      <SlideTitle title="ENERGY" svgTitle="energy" isReversed={false} />

      <View style={theme.slideStyle.footer}>
        <View style={styles.content}>
          <Text variant="body">How many people live with you?</Text>
          <Text variant="body">{roommates} </Text>
          <SliderOnboarding
            onValueChange={(value: number) => setRoommates(value)}
            value={roommates}
            step={1}
            maximumValue={10}
            minimumValue={0}
          />
          <View style={{ padding: hp('1%') }}></View>
          <Text variant="body">What is the area of your housing?</Text>
          <Text variant="body">{houseSurface} m²</Text>
          <SliderOnboarding
            onValueChange={(value: number) => setHouseSurface(value)}
            value={houseSurface}
            step={5}
            maximumValue={300}
            minimumValue={0}
          />
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
          <Button variant="default" onPress={handlePress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default SlideEnergy;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  content: { maxWidth: width - 0, alignItems: 'center', marginTop: hp('5%') },
});
