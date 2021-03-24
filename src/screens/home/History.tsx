import React from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Text, Box } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { HistoryGraph, TripHistory } from './components';
const { width, height } = Dimensions.get('window');
import { useTypedSelector } from '../../hooks';

interface MixedTripInteface {
  [x: number]:
    | {
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
  const trips = { ...data.land_trips, ...data.air_trips };
  const renderItem = ({ item }: MixedTripInteface) => (
    <TripHistory
      type={trips[item].vehicle_type ? trips[item].vehicle_type : 'plane'}
      distance={trips[item].distance}
      amount={trips[item].amount}
      date={trips[item].created_at}
    />
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.viewContainer}>
        <Box
          alignItems="center"
          style={styles.boxGraph}
          justifyContent="center"
          backgroundColor="lightgray"
        >
          <HistoryGraph />
        </Box>
        <Box
          marginTop="s"
          paddingTop="m"
          style={{ width: width, borderRadius: 20 }}
          justifyContent="center"
          backgroundColor="white"
        >
          <Text variant="title3" margin="s">
            Ton historique :
          </Text>
          <FlatList data={Object.keys(trips)} renderItem={renderItem} keyExtractor={item => item} />
        </Box>
      </View>
    </ScrollView>
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
});
