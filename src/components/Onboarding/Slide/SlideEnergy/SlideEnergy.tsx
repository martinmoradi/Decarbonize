import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, TextInput } from 'react-native';
import { Box, Text, useTheme } from '../../../Theme';

const SlideEnergy = () => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const { height, width } = Dimensions.get('window');
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: 44,
    },
    title: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { rotate: '-90deg' },
        { translateY: Platform.OS === 'ios' ? (height / 3 - 590) / 2 : (height / 3 - 550) / 2 },
        { translateX: Platform.OS === 'ios' ? width / 40 + 12 : width / 40 + 52 },
      ],
    },
  });
  return (
    <Box style={{ padding: 44 }}>
      <Text style={styles.title} variant="titleTopSlide">
        ENERGY
      </Text>
      <Box style={{ height: height, justifyContent: 'center' }}>
        <Text variant="body">How many people live with you?</Text>
        <TextInput onChangeText={e => setPeople(e)} value={people} />
        <Text variant="body">What is the surface are of your housing?</Text>
        <TextInput onChangeText={e => setSurface(e)} value={surface} />
        <Text variant="body">How do you heat your housing?</Text>
        <TextInput onChangeText={e => setHeat(e)} value={heat} />
      </Box>
    </Box>
  );
};

export default SlideEnergy;
