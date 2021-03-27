import React, { useEffect, useState, useCallback } from 'react';
import { Text, Button } from '../../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTypedSelector, useActions } from '../../../hooks';
import { AntDesign } from '@expo/vector-icons';
import { MealType, MealCategoryType } from '../../../redux/types';

interface PropTypes {
  type: MealCategoryType;
}

const matchTypes: Record<MealCategoryType, keyof MealType> = {
  red_meat: 'red_meat_meals',
  white_meat: 'white_meat_meals',
  vegetarian: 'vegetarian_meals',
  vegan: 'vegan_meals',
};

const FoodBox = (props: PropTypes) => {
  const { data, isLoading } = useTypedSelector(state => state.meals);
  const { postMeal, fetchMeals, deleteMeal } = useActions();
  const [showDescription, setShowDescription] = useState(false);
  const mealCount = Object.keys(data[matchTypes[props.type]]).length;
  const last_meal = data[matchTypes[props.type]][0];

  let name;
  let description;

  useEffect(() => {
    fetchMeals();
  }, []);

  const imageSource = (type: string) => {
    switch (type) {
      case 'red_meat':
        name = 'Red meat';
        description = 'Meal containing beef, veal or lamb.';
        return require(`../../../../assets/images/red_meat.png`);
      case 'white_meat':
        name = 'White meat';
        description = 'Meal containing poultry or pork.';
        return require(`../../../../assets/images/white_meat.png`);
      case 'vegetarian':
        name = 'Vegetarian';
        description = 'Meal without animal flesh, but with eggs or cheese.';
        return require(`../../../../assets/images/Vegetarian.png`);
      case 'vegan':
        name = 'Vegan';
        description = 'Meal without any animal products.';
        return require(`../../../../assets/images/Vegan.png`);
      default:
        throw new Error(`Unknown type ${type}`);
    }
  };

  const handleMinus = () => {
    if (showDescription) setShowDescription(false);
    if (!(mealCount > 0)) {
      return;
    }
    deleteMeal(last_meal.id);
  };

  const handlePlus = () => {
    if (showDescription) setShowDescription(false);
    postMeal(props.type);
  };

  return (
    <View style={styles.boxContainer}>
      <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
        <View style={{ position: 'absolute', zIndex: 1, left: 2, top: 2 }}>
          {showDescription ? (
            <AntDesign name="closecircleo" size={14} color="white" />
          ) : (
            <AntDesign name="infocirlceo" size={14} color="white" />
          )}
        </View>
        <View style={styles.viewImg}>
          <Image source={imageSource(props.type)} style={styles.imgStyle} />
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginTop: 5 }}>
        {showDescription ? (
          <Text variant="cardInfo">{description}</Text>
        ) : (
          <Text variant="titleFoodCard">{name}</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleMinus}
          label={<AntDesign name="minus" size={24} color="black" />}
          style={styles.buttons}
        />
        <View style={{ alignItems: 'center' }}>
          {isLoading ? (
            <ActivityIndicator color="#bc5090" />
          ) : (
            <Text variant="title2">{mealCount}</Text>
          )}
        </View>
        <Button
          onPress={handlePlus}
          label={<AntDesign name="plus" size={24} color="black" />}
          style={styles.buttons}
        />
      </View>
    </View>
  );
};

export default FoodBox;

const styles = StyleSheet.create({
  boxContainer: {
    width: wp('40%'),
    height: hp('22%'),
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginHorizontal: wp('5%'),
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 75,
  },
  viewImg: {
    backgroundColor: '#bc5090',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  buttons: {
    width: 40,
    height: 40,
  },
  imgStyle: { height: 30, width: 30, tintColor: 'white' },
  text: { marginLeft: wp('7%') },
});
