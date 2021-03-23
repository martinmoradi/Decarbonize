import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Box, MeteoBar, Trajet, useTheme } from '../components';
import DashboardGraph from '../components/DashboardGraph';
import { Dimensions } from 'react-native';
import BusJourney from '../components/BusJourney';
import TrainJourney from '../components/TrainJourney';
const { width } = Dimensions.get('window');

const DashboardScreen = () => {
  const theme = useTheme();
  return (
    <ScrollView>
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
          style={{
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
          }}
          backgroundColor="primaryLight"
          marginBottom="s"
        >
          <MeteoBar />
        </Box>

        <Box
          alignItems="center"
          style={{
            borderRadius: 20,
            flex: 1,
            width: width,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.5,
            shadowRadius: 12.35,
            elevation: 19,
          }}
          justifyContent="center"
          backgroundColor="white"
        >
          <DashboardGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          marginBottom="s"
          style={{
            width: width,
            height: 100,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.5,
            shadowRadius: 12.35,
            elevation: 19,
          }}
          justifyContent="center"
          backgroundColor="primary"
        >
          <Text variant="title3" color="white" margin="s">
            Cette semaine :
          </Text>
          <Box
            alignItems="center"
            style={{
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
            }}
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
          style={{ width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          justifyContent="center"
          backgroundColor="white"
          alignItems="center"
        >
          <Text variant="title3" margin="s">
            Tes Trajets :
          </Text>
          <Trajet />
          <BusJourney />
          <TrainJourney />
          <Trajet />
          <Trajet />
          <Trajet />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default DashboardScreen;
