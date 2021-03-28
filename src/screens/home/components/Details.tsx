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
  const { yearly_total } = useTypedSelector(state => state.emissions.data);
  
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
        <Text variant="body" style={{ textAlign: 'justify' }}>
          All our formulas are based on French data, primary from the ADEME (agence de la transition
          écologique i.e. agency of ecological transition).
        </Text>
      </Box>
      <Box marginTop="m" marginHorizontal="m">
        <Text variant="body" style={{ textAlign: 'justify' }}>
          The French carbon footprint represents <Text color="primary">11 tonnes of CO2 </Text>
          equivalent (t CO2 eq) per inhabitant in 2018.
        </Text>
      </Box>
      <Box marginTop="m" marginHorizontal="m">
        <Text variant="body" style={{ textAlign: 'justify' }}>
          The French carbon footprint represents <Text color="primary">11 tonnes of CO2 </Text>
          equivalent (t CO2 eq) per inhabitant in 2018. This accounts for greenhouse gases (GHGs)
          caused by the French consumption (including consumption by public authorities, non-profit
          organisations and investments), by taking the emissions associated with the goods and
          services production imported into consideration.
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
