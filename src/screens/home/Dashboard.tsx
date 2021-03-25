import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { MeteoBar, Trajet } from './components';
import { EmissionsPie } from './components/';
import { Dimensions } from 'react-native';
import BusJourney from './components/BusJourney';
import TrainJourney from './components/TrainJourney';
import AirplaneJourney from './components/AirplaneJourney';
import TramJourney from './components/TramJourney';
import SubwayJourney from './components/SubwayJourney';

const Dashboard = () => {
  const theme = useTheme();
  return (
    <ScrollView>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
      <SafeAreaView>
        <Box style={{ alignItems: 'center' }}>
          <Box
            paddingLeft="m"
            paddingTop="s"
            justifyContent="flex-end"
            paddingBottom="m"
            style={styles.boxContainer}
            backgroundColor="primaryLight"
            marginBottom="s"
          >
            <MeteoBar />
          </Box>

          <EmissionsPie />

          <Box
            marginTop="s"
            paddingTop="m"
            marginBottom="s"
            style={[styles.boxInfo, { height: 100 }]}
            justifyContent="center"
            backgroundColor="primary"
          >
            <Box
              alignItems="center"
              style={styles.boxInfo}
              justifyContent="center"
              backgroundColor="white"
            >
              <Text variant="title2" color="primary">
                Food Boxes
              </Text>
            </Box>
          </Box>
          <Box
            marginTop="m"
            paddingTop="m"
            style={styles.boxTravel}
            justifyContent="center"
            backgroundColor="white"
            alignItems="center"
          >
            <Text variant="title3" margin="s">
              Total trips emissions :
            </Text>
            <Trajet />
            <BusJourney />
            <TrainJourney />
            <AirplaneJourney />
            <TramJourney />
            <SubwayJourney />
          </Box>
        </Box>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Dashboard;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  boxContainer: {
    width: width,
    height: 155,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  boxInfo: {
    width: width,
    height: 80,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  boxGraph: {
    width: width,
    borderRadius: 20,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  boxTravel: {
    width: width,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
