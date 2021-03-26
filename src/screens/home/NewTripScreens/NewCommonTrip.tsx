import React, { useState } from 'react';
import { Box, Text, Button } from '../../../components';
import { TripStackNavigationProps } from '../../../routers/NavigationTypes';
import Checkbox from '../../../components/Checkbox';
import { useActions, useTypedSelector } from '../../../hooks';
import {
  Dimensions,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const NewCommonTrip = ({ route, navigation, url }: TripStackNavigationProps<'NewCommonTrip'>) => {
  const { postCommonTrip } = useActions();
  const { width } = Dimensions.get('window');
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);
  const [tripData, setTripData] = React.useState({
    vehicle_type: route.params.type,
    round_trip: false,
    distance: 0,
  });

  const changeDistance = (e: string) => {
    setTripData({
      vehicle_type: route.params.type,
      round_trip: tripData.round_trip,
      distance: parseFloat(e),
    });
  };

  const Images = [
    {
      train: require('../../../../assets/images/train.jpg'),
    },
    {
      bus: require('../../../../assets/images/train.jpg'),
    },
    {
      subway: require('../../../../assets/images/subway.jpg'),
    },
    {
      tramway: require('../../../../assets/images/tramway.jpg'),
    },
  ];

  const getImg = (url: undefined) => {
    if (tripData.vehicle_type === 'train') {
      return (url = require('../../../../assets/images/train.jpg'));
    }
    if (tripData.vehicle_type === 'tramway') {
      return (url = require('../../../../assets/images/tramway.jpg'));
    }
    if (tripData.vehicle_type === 'metro') {
      return (url = require('../../../../assets/images/subway.jpg'));
    }
    if (tripData.vehicle_type === 'bus') {
      return (url = require('../../../../assets/images/bus.jpg'));
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#0C0D34' }}>
      <View style={styles.mainView}>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="secondary"
          marginBottom="s"
        ></Box>
        <Box
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          style={styles.boxStyle}
          backgroundColor="lightgray"
        >
          <Image source={getImg(url)} style={styles.imgStyle} />
        </Box>
        {errorMessage ? (
          <Text
            variant="body"
            style={{ fontFamily: 'Avenir-Semibold', color: '#FF0058' }}
            textAlign="center"
            marginBottom="l"
          >
            {errorMessage}
          </Text>
        ) : null}
        <Box
          marginBottom="s"
          justifyContent="space-between"
          alignItems="center"
          paddingBottom="m"
          style={styles.boxDistance}
          backgroundColor="lightgray"
        >
          <View style={{ padding: 3 }} />
          <Text variant="title2">Distance in Km</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={changeDistance}
            value={tripData.distance}
            placeholder={'0'}
            keyboardType="numeric"
          />
          <Checkbox
            label="Round Trip ?"
            checked={tripData.round_trip}
            onChange={() =>
              setTripData({
                vehicle_type: route.params.type,
                round_trip: !tripData.round_trip,
                distance: tripData.distance,
              })
            }
          />
          {isLoading ? (
            <Button
              variant="primary"
              label={<ActivityIndicator />}
              onPress={() => postCommonTrip(tripData)}
            />
          ) : (
            <View style={{ flexDirection: 'row', maxWidth: width }}>
              <Button
                variant="default"
                label="Go Back"
                onPress={() => navigation.goBack()}
                style={{ width: 140 }}
              />
              <Button
                variant="primary"
                label="Add"
                onPress={() => postCommonTrip(tripData)}
                style={{ marginLeft: wp('2%'), width: 140 }}
              />
            </View>
          )}
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0C0D34',
  },
  boxContainer: {
    width: wp('100%'),
    height: 50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  boxDistance: {
    width: wp('100%') - 40,
    height: 260,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  inputStyle: {
    height: 40,
    width: 100,
    margin: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  boxStyle: {
    marginBottom: hp('2.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    height: 130,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
  Button: { width: 100, margin: 5 },
  imgStyle: {
    height: 130,
    width: wp('90%'),
    borderRadius: 15,
  },
});

export default NewCommonTrip;
