import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Box, useTheme } from '../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { TripHistory, MealHistory } from './components';
const { width, height } = Dimensions.get('window');
import { useTypedSelector } from '../../hooks';
import TextButton from '../../components/TextButton';

const History = () => {
  const [selected, setSeleted] = React.useState('Land');
  const { data } = useTypedSelector(state => state.trips);
  const { data: meals } = useTypedSelector(state => state.meals);
  const theme = useTheme();
  const allMeals = {...meals.red_meat_meals, ...meals.white_meat_meals, ...meals.vegetarian_meals, ...meals.vegan_meals}


  const switchLand = () => {
    setSeleted('Land');
  };

  const switchAir = () => {
    setSeleted('Air');
  };

  const switchMeals = () => {
    setSeleted('Meals');
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

  const renderItemMeals = ({index})=>(
    <MealHistory
    type={allMeals[index].meal_type}
    amount={allMeals[index].amount}
    date={allMeals[index].created_at}
    />
  )


  let choice;
  if (selected === 'Land') {
    choice = (
      <FlatList
        data={data.land_trips}
        style={{ marginBottom: 100 }}
        renderItem={renderItemLand}
        keyExtractor={item => item.id}
      />
    );
  } else if (selected === 'Air') {
    choice = (
      <FlatList
        data={data.air_trips}
        style={{ marginBottom: 100 }}
        renderItem={renderItemAir}
        keyExtractor={item => item.id}
      />
    );
  } else if (selected === 'Meals') {
    choice = (
    <FlatList
      data={Object.keys(allMeals)}
      style={{ marginBottom: 100 }}
      renderItem={renderItemMeals}
      keyExtractor={item => item.id}
    />);
  }


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
            <TextButton label="Meals" onPress={switchMeals} style={styles.textButton} />
          </Box>
        </Box>
      </Box>
      {choice}
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
