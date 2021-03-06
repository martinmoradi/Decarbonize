import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Box, Text, useTheme } from '../../components';
import { useTypedSelector } from '../../hooks';
import { SingleAirTrip, SingleLandTrip, SingleMealType } from '../../redux/types';
import { MealHistory, TripHistory } from './components';
const { width, height } = Dimensions.get('window');

const History = () => {
  const [selected, setSelected] = useState<number>(0);
  const { data } = useTypedSelector(state => state.trips);
  const { data: meals } = useTypedSelector(state => state.meals);

  const theme = useTheme();

  const allMeals = [
    ...meals.red_meat_meals,
    ...meals.white_meat_meals,
    ...meals.vegetarian_meals,
    ...meals.vegan_meals,
  ];

  type ItemLandTrip = {
    item: SingleLandTrip;
  };

  type ItemAirTrip = {
    item: SingleAirTrip;
  };

  type ItemMeal = {
    item: SingleMealType;
  };
  const renderItemLand = ({ item }: ItemLandTrip) => (
    <TripHistory
      type={item.vehicle_type}
      distance={item.distance}
      amount={item.amount}
      date={item.created_at}
    />
  );
  const renderItemAir = ({ item }: ItemAirTrip) => (
    <TripHistory
      type="plane"
      distance={item.distance}
      amount={item.amount}
      date={item.created_at}
    />
  );

  const renderItemMeals = ({ item }: ItemMeal) => (
    <MealHistory type={item.meal_type} amount={item.amount} date={item.created_at} />
  );

  let choice;
  if (selected === 0) {
    choice = (
      <FlatList
        data={data.land_trips}
        style={{ marginBottom: 100 }}
        renderItem={renderItemLand}
        keyExtractor={item => `Land${item.created_at}${item.amount}${item.id}`}
      />
    );
  } else if (selected === 1) {
    choice = (
      <FlatList
        data={data.air_trips}
        style={{ marginBottom: 100 }}
        renderItem={renderItemAir}
        keyExtractor={item => `Air$${item.created_at}${item.amount}${item.id}`}
      />
    );
  } else if (selected === 2) {
    choice = (
      <FlatList
        data={allMeals}
        style={{ marginBottom: 100 }}
        renderItem={renderItemMeals}
        keyExtractor={item => `Meal$${item.created_at}${item.amount}${item.id}`}
      />
    );
  }

  const buttons = ['Trips', 'Air trips', 'Meals'];
  return (
    <View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: theme.colors.secondary,
        }}
      ></View>

      <Box marginTop="xl" />
      <View
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: 75,
          marginBottom: 50,
          minHeight: hp('100%'),
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text variant="titleCard" marginTop="xl" marginBottom="m" style={styles.h2}>
            My <Text color="primary">emissions</Text> history
          </Text>
        </View>
        <ButtonGroup
          onPress={(index: number) => setSelected(index)}
          selectedIndex={selected}
          buttons={buttons}
          buttonStyle={theme.slideStyle.buttonStyleUnselected}
          selectedButtonStyle={theme.slideStyle.buttonStyle}
          textStyle={{ textAlign: 'center', fontSize: 16 }}
          containerStyle={{ borderWidth: 0, backgroundColor: 'transparent' }}
          innerBorderStyle={{ width: 0 }}
        />
        <Box marginTop="m">{choice}</Box>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    backgroundColor: '#0C0D34',
  },
  h2: {
    color: 'rgba(54, 54, 83, 0.7)',
  },
  boxGraph: {
    marginTop: height / 20,
    width: wp('95%'),
    borderRadius: 10,
    paddingLeft: 30,
  },
  boxContainer: {
    width: width,
    height: hp('18%'),
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
