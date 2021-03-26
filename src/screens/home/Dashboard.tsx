import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { Text, Box, useTheme, Container } from '../../components';
import { EmissionsPieIOS, Trajet, EmissionsPieAndroid, MeteoBar } from './components';
import { Dimensions } from 'react-native';
import BusJourney from './components/BusJourney';
import TrainJourney from './components/TrainJourney';
import Meals from './components/Meals';
import AirplaneJourney from './components/AirplaneJourney';
import TramJourney from './components/TramJourney';
import SubwayJourney from './components/SubwayJourney';

const Dashboard = () => {
  const image = [require('../../components/assets/patterns/1.png')] as const;
  const theme = useTheme();

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" color="white" barStyle="light-content" />
      <ImageBackground
        source={require('../../components/assets/patterns/3.png')}
        style={styles.image}
      >
        <SafeAreaView>
          {Platform.OS === 'ios' ? <EmissionsPieIOS /> : <EmissionsPieAndroid />}

          <Box
            alignItems="center"
            style={styles.boxInfo}
            backgroundColor="lightgray"
            paddingTop="xl"
            marginTop="m"
          >
            <Text variant="title2" marginBottom="m" style={{ color: theme.colors.secondary }}>
              Your monthly <Text color="primary">alimentation</Text>
            </Text>
            <Meals />
          </Box>

          <Box
            marginTop="m"
            paddingVertical="m"
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
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default Dashboard;

const { width, height } = Dimensions.get('window');
const aspectRatio = 750 / 1125;

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
    height: '30%',
    borderRadius: 50,
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
  image: {
    resizeMode: 'repeat',
    width,
  },
});
