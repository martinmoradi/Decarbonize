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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Dashboard = () => {
  const image = [require('../../components/assets/patterns/1.png')] as const;
  const theme = useTheme();

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" color="white" barStyle="light-content" />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></View>
      {/* <ImageBackground
        source={require('../../components/assets/patterns/3.png')}
        style={styles.image}
      > */}
      <SafeAreaView>
        {Platform.OS === 'ios' ? <EmissionsPieIOS /> : <EmissionsPieAndroid />}

        <Meals />
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

      {/* </ImageBackground> */}
    </ScrollView>
  );
};

export default Dashboard;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  boxContainer: {
    width: width,
    height: hp('30%'),
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
