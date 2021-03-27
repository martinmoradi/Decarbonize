import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import AirplaneJourney from './components/AirplaneJourney';
import TramJourney from './components/TramJourney';
import SubwayJourney from './components/SubwayJourney';
import BusJourney from './components/BusJourney';
import TrainJourney from './components/TrainJourney';
import Trajet from './components/Trajet';

const { width, height } = Dimensions.get('window');

const TotalsHistory = () => {
  const theme = useTheme();
  return (
    <View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></View>

      <Box marginTop="xl" />
      <View
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginBottom: 50,
          minHeight: hp('100%'),
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={styles.h2}>
            My <Text color="primary">emissions</Text> history
          </Text>
          <Box
            marginTop="m"
            paddingVertical="m"
            style={styles.boxTravel}
            justifyContent="center"
            alignItems="center"
          >
            <Trajet />
            <BusJourney />
            <TrainJourney />
            <AirplaneJourney />
            <TramJourney />
            <SubwayJourney />
          </Box>
        </View>
      </View>
    </View>
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
