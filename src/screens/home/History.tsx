import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { TripHistory } from './components';
const { width, height } = Dimensions.get('window');
import { useTypedSelector } from '../../hooks';

interface MixedTripInteface {
  [x: number]: {
        amount: number;
        created_at: string;
        updated_at: string;
        distance: number;
        id: number;
        user_id: number;
        round_trip: boolean;
        vehicle_type: string;
      }
    | {
        amount: number;
        created_at: string;
        updated_at: string;
        distance: number;
        id: number;
        user_id: number;
        round_trip: boolean;
        departure: string;
        arrival: string;
        arrival_latitude: number;
        arrival_longitude: number;
        departure_latitude: number;
        departure_longitude: number;
      };
}

const History = () => {
  const { data } = useTypedSelector(state => state.trips);
  const trips: MixedTripInteface = { ...data.land_trips, ...data.air_trips };
  const theme = useTheme();
  
  const renderItem = ({ item }) => (
    <TripHistory
      type={trips[item].vehicle_type ? trips[item].vehicle_type : 'plane'}
      distance={trips[item].distance}
      amount={trips[item].amount}
      date={trips[item].created_at}
    />
  );

  return (
    
      <View>
        <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.background2,
        }}
      ></View>
        <Box
          paddingLeft="m"
          paddingTop="s"
          justifyContent="flex-end"
          paddingBottom="m"
          style={styles.boxContainer}
          backgroundColor="primary"
          marginBottom="s"
        >
          <Text variant="title2" color="white">
            HISTORY
          </Text>
        </Box>
        <FlatList data={Object.keys(trips)} renderItem={renderItem} keyExtractor={item => item} />

      </View>
  );
};

export default History;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#39D697',
  },
  boxGraph: {
    marginTop: height / 20,
    width: wp('95%'),
    borderRadius: 10,
    paddingLeft: 30,
  },
  boxContainer: {
    width: width,
    height: 100,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
  },
});
