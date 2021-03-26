import React from 'react';
import { Box, Text, Button, Checkbox } from '../../../components';
import { TripStackNavigationProps } from '../../../routers';
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
import { ButtonSecondary } from '../../../components/Button';

const { width } = Dimensions.get('window');

const NewCarTrip = ({ navigation }: TripStackNavigationProps<'NewCarTrip'>) => {
  const { postCommonTrip } = useActions();
  const { errorMessage, isLoading } = useTypedSelector(state => state.trips);
  const [tripData, setTripData] = React.useState({
    vehicle_type: 'petrol_car',
    round_trip: false,
    distance: 0,
  });
  const changeDistance = (e: string) => {
    setTripData({
      vehicle_type: tripData.vehicle_type,
      round_trip: tripData.round_trip,
      distance: parseFloat(e),
    });
  };
  const switchPetrol = () => {
    setTripData({
      vehicle_type: 'petrol_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
  };
  const switchDiesel = () => {
    setTripData({
      vehicle_type: 'diesel_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
  };
  const switchElectric = () => {
    setTripData({
      vehicle_type: 'electric_car',
      round_trip: tripData.round_trip,
      distance: tripData.distance,
    });
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
          <Image source={require('../../../../assets/images/car.jpg')} style={styles.imgStyle} />
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
          <Text variant="title3">
            Choose your{' '}
            <Text variant="title3" style={{ color: '#39D697' }}>
              car
            </Text>{' '}
            energy{' '}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <ButtonSecondary
              variant={tripData.vehicle_type === 'petrol_car' ? 'primary' : 'default'}
              label="Petrol"
              onPress={switchPetrol}
              style={styles.Button}
            />
            <ButtonSecondary
              variant={tripData.vehicle_type === 'diesel_car' ? 'primary' : 'default'}
              label="Diesel"
              onPress={switchDiesel}
              style={styles.Button}
            />
            <ButtonSecondary
              variant={tripData.vehicle_type === 'electric_car' ? 'primary' : 'default'}
              label="Electric"
              onPress={switchElectric}
              style={styles.Button}
            />
          </View>
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
                vehicle_type: tripData.vehicle_type,
                round_trip: !tripData.round_trip,
                distance: tripData.distance,
              })
            }
          />

          {isLoading ? (
            <ButtonSecondary
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
              <ButtonSecondary
                variant="primary"
                label="Add Trip"
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
    width: width,
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
    width: width - 40,
    height: 300,
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
export default NewCarTrip;
