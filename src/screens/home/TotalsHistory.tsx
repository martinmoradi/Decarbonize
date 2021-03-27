import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import PlaneDetails from './components/history-details/PlaneDetails';
import TramDetails from './components/history-details/TramDetails';
import MetroDetails from './components/history-details/MetroDetails';
import BusDetails from './components/history-details/BusDetails';
import TrainDetails from './components/history-details/TrainDetails';
import CarDetails from './components/history-details/CarDetails';

const { width, height } = Dimensions.get('window');

const TotalsHistory = () => {
  const theme = useTheme();
  return (
    <Box style={{ flex: 1 }}>
      <Box
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></Box>
      <Box
        marginTop="xl"
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginBottom: 50,
          minHeight: hp('100%'),
          flex: 1,
        }}
      >
        <Box style={{ alignItems: 'center', flex: 1 }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={styles.h2}>
            My trips <Text color="primary">summary</Text>
          </Text>
          <ScrollView>
            <Box marginTop="m">
              <CarDetails />
            </Box>
            <Box marginTop="m">
              <TrainDetails />
            </Box>
            <Box marginTop="m">
              <PlaneDetails />
            </Box>
            <Box marginTop="m">
              <BusDetails />
            </Box>
            <Box marginTop="m">
              <MetroDetails />
            </Box>
            <Box marginTop="m">
              <TramDetails />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalsHistory;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#0C0D34',
  },
  h2: {
    color: 'rgba(54, 54, 83, 0.7)',
  },
  boxGraph: {
    marginTop: height / 20,
    width: wp('95%'),
    borderRadius: 10,
    paddingLeft: 30,
  },
  boxContainer: {
    width: width,
    height: hp('18%'),
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxTravel: {
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textButton: { width: 60, margin: 5 },
  boxButton: { flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 },
});
