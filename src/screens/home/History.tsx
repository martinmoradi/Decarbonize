import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { TripHistory } from './components';
const { width, height } = Dimensions.get('window');
import { useTypedSelector, useActions } from '../../hooks';
import TextButton from '../../components/TextButton';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const History = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { fetchTrips } = useActions();
  const [selected, setSeleted] = React.useState('Land');
  const { data } = useTypedSelector(state => state.trips);
  const theme = useTheme();

  const onRefresh = React.useCallback(() => {
    fetchTrips();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const switchLand = () => {
    setSeleted('Land');
  };

  const switchAir = () => {
    setSeleted('Air');
  };

  const renderItemLand = ({ item }) => (
    <TripHistory
      type={item.vehicle_type}
      distance={item.distance}
      amount={item.amount}
      date={item.created_at}
    />
  );
  const renderItemAir = ({ item }) => (
    <TripHistory
      type="plane"
      distance={item.distance}
      amount={item.amount}
      date={item.created_at}
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
        <Box flexDirection="row" justifyContent="space-between">
          <Text variant="title2" color="white">
            HISTORY
          </Text>
          <Box style={styles.boxButton}>
            <TextButton label="Land" onPress={switchLand} style={styles.textButton} />
            <TextButton label="Air" onPress={switchAir} style={styles.textButton} />
          </Box>
        </Box>
      </Box>
      {selected === 'Land' ? (
        <FlatList
          data={data.land_trips}
          style={{ marginBottom: 100 }}
          renderItem={renderItemLand}
          keyExtractor={item => item.id}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      ) : (
        <FlatList
          data={data.air_trips}
          style={{ marginBottom: 100 }}
          renderItem={renderItemAir}
          keyExtractor={item => item.id}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
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
  textButton: { width: 60, margin: 5 },
  boxButton: { flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 },
});
