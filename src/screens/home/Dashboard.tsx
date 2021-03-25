import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Box, useTheme, Button } from '../../components';
import { MeteoBar, Trajet } from './components';
import DashboardGraph from './components/DashboardGraph';
import { Dimensions } from 'react-native';
import BusJourney from './components/BusJourney';
import TrainJourney from './components/TrainJourney';
import Meals from './components/Meals';
import AirplaneJourney from './components/AirplaneJourney';
import TramJourney from './components/TramJourney';
import SubwayJourney from './components/SubwayJourney';
const { width } = Dimensions.get('window');



const Dashboard = () => {
  const theme = useTheme();

  return (
    <ScrollView >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
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

        <Box
          alignItems="center"
          style={styles.boxGraph}
          justifyContent="center"
          backgroundColor="white"
        >
          <DashboardGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          marginBottom="s"
          style={[styles.boxInfo]}
          justifyContent="center"
          backgroundColor="primary"
        >
          <Box
            alignItems="center"
            style={styles.boxInfo}
            justifyContent="center"
            backgroundColor="white"
          >
            <Meals />
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
    </ScrollView>
  );
};

export default Dashboard;

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
    height: 240,
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
