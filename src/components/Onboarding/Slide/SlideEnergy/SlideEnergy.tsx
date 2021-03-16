import React, { useState } from 'react';
import { Dimensions, TextInput, View } from 'react-native';
import { Text, useTheme } from '../../../Theme';

const SlideEnergy = () => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();
  // const style = StyleSheet.create({
  //   container: {
  //     padding: 44,
  //   },
  //   titleContainer: {
  //     height: 100,
  //     justifyContent: 'center',
  //     transform: [
  //       { rotate: '90deg' },
  //       { translateY: (height / 3 - 450) / 2 },
  //       { translateX: width / 3.5 },
  //     ],
  //   },
  // });
  return (
    <View style={theme.slide.container}>
      <Text style={theme.slide.titleSlide} variant="titleTopSlide">
        ENERGY
      </Text>
      <View style={theme.slide.viewContainer}>
        <Text variant="body">How many people live with you?</Text>
        <TextInput onChangeText={e => setPeople(e)} value={people} />
        <Text variant="body">What is the surface are of your housing?</Text>
        <TextInput onChangeText={e => setSurface(e)} value={surface} />
        <Text variant="body">How do you heat your housing?</Text>
        <TextInput onChangeText={e => setHeat(e)} value={heat} />
      </View>
    </View>
  );
};

export default SlideEnergy;
