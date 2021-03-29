import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Box, useTheme } from '../../components';
import Meals from './components/Meals';

const MealsScreen = () => {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.secondary, flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
          minHeight: hp(100),
        }}
      ></Box>
      <Box marginBottom="xl" marginTop="xl">
        <Meals />
      </Box>
      <ScrollView></ScrollView>
    </Box>
  );
};

export default MealsScreen;
