import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text, useTheme } from '../../../components/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useTypedSelector } from '../../../hooks';

const Details = () => {
  const theme = useTheme();
  const { yearly_total, monthly_total } = useTypedSelector(state => state.emissions.data);

  const treesCalc = () => {
    const excedent = yearly_total - 2000;
    if (excedent < 24) return 0;
    return (excedent / 24).toFixed(0);
  };

  return (
    <Box
      alignItems="center"
      style={styles.boxInfo}
      backgroundColor="lightgray"
      paddingTop="xl"
      paddingBottom="xl"
      marginTop="m"
    >
      <Box marginBottom="m">
        <Text
          variant="titleCard"
          marginTop="s"
          marginBottom="s"
          style={{ color: theme.colors.text }}
        >
          Understanding the <Text color="primary">numbers</Text>
        </Text>
      </Box>

      <Box marginHorizontal="m">
        <Text variant="titleCard" color="primary">
          11.2 <Text color="text">tonnes</Text>
        </Text>
      </Box>
      <Box marginTop="m" marginHorizontal="l">
        <Text variant="body" style={{ textAlign: 'justify' }}>
          The French carbon footprint represents{' '}
          <Text variant="bodyHighlight">11.2 tonnes of CO2 </Text>
          per inhabitant and per year.
        </Text>
      </Box>
      <Box marginHorizontal="l" marginTop="l">
        <Text variant="titleCard" color="primary">
          2 <Text color="text">tonnes</Text>
        </Text>
      </Box>
      <Box marginTop="m" marginHorizontal="l">
        <Text variant="body" style={{ textAlign: 'justify' }}>
          To reach the goal of maximum global warming of 2 degrees, as set by the Paris Climate
          Accord, we should set for a maximum of{' '}
          <Text variant="bodyHighlight">2 tonnes of CO2 </Text>
          per inhabitant and per year before 2050.
        </Text>
      </Box>
      {treesCalc() ? (
        <>
          <Box marginHorizontal="l" marginTop="l">
            <Text variant="titleCard" color="primary">
              {treesCalc()} <Text color="text">trees</Text>
            </Text>
          </Box>
          <Box marginTop="m" marginHorizontal="l">
            <Text variant="body" style={{ textAlign: 'justify' }}>
              Is the number of trees needed to offset{' '}
              <Text variant="bodyHighlight">your annual footprint</Text>. As well as reducing our
              individual carbon footprints, non-governmental organizations are working
              <Text color="primary">2 tonnes of CO2 </Text>
              per inhabitant and per year before 2050.
            </Text>
          </Box>
        </>
      ) : null}
      <Box marginHorizontal="l" marginTop="m">
        <Text variant="body" style={{ textAlign: 'justify' }}>
          All our formulas are based on French data, primary from the ADEME (agence de la transition
          écologique i.e. agency of ecological transition).
        </Text>
      </Box>
    </Box>
  );
};

export default Details;

const styles = StyleSheet.create({
  boxInfo: {
    width: wp('100%'),
    height: hp('100%'),
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
});
