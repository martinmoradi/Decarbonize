import React from 'react';
import { Box, Text, Button } from '../../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector, useActions } from '../../../hooks';

interface PropTypes {
  type: string;
}

const FoodBox = (props: PropTypes) => {
  const { data } = useTypedSelector(state => state.meals);
  const { postMeal, fetchMeals, deleteMeal } = useActions();
  const mealCount = Object.keys(data[`${props.type}` + '_meals']).length;
  const last_meal = data[`${props.type}` + '_meals'][0];
  let name;

  React.useEffect(() => {
    fetchMeals();
  }, []);

  const imageSource = (type: string) => {
    if (type === 'red_meat') {
      name = 'Red Meat';
      return require(`../../../../assets/images/red_meat.png`);
    } else if (type === 'white_meat') {
      name = 'White Meat';
      return require(`../../../../assets/images/white_meat.png`);
    } else if (type === 'vegetarian') {
      name = 'Vegetarian';
      return require(`../../../../assets/images/Vegetarian.png`);
    } else if (type === 'vegan') {
      name = 'Vegan';
      return require(`../../../../assets/images/Vegan.png`);
    }
  };

  const handleMinus = () => {
    if (!(mealCount > 0)) {
      return;
    }
    deleteMeal(last_meal.id);
  };

  const handlePlus = () => {
    postMeal(props.type);
  };

  return (
    <View style={s.boxContainer}>
      <View style={s.viewImg}>
        <Image source={imageSource(props.type)} style={s.imgStyle} />
      </View>
      <Text style={s.text}>{name}</Text>
      <View style={s.buttonContainer}>
        <Button onPress={handlePlus} label="+" style={{ width: 20, height: 20 }} />
        <Text>{mealCount}</Text>
        <Button onPress={handleMinus} label="-" style={{ width: 20, height: 20 }} />
      </View>
    </View>
  );
};

export default FoodBox;
const s = StyleSheet.create({
  boxContainer: {
    width: wp('40%'),
    height: 100,
    borderRadius: 20,
    backgroundColor: '#A9EFD2',
    marginHorizontal: wp('5%'),
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  viewImg: {
    backgroundColor: '#39D697',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 30, width: 30, tintColor: 'white' },
  text: { marginLeft: wp('7%') },
});
