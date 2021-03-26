import React from 'react';
import { Box, Text, Button } from '../../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, View, StyleSheet } from 'react-native';
import { useTypedSelector, useActions } from '../../../hooks';
import { AntDesign } from '@expo/vector-icons';

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
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text variant="title3">{name}</Text>
      </View>
      <Text style={s.text}></Text>
      <View style={s.buttonContainer}>
        <Button
          onPress={handleMinus}
          label={<AntDesign name="minus" size={24} color="black" />}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ alignItems: 'center' }}>
          <Text variant="title2">{mealCount}</Text>
        </View>
        <Button
          onPress={handlePlus}
          label={<AntDesign name="plus" size={24} color="black" />}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </View>
  );
};

export default FoodBox;
const s = StyleSheet.create({
  boxContainer: {
    width: wp('40%'),
    height: 150,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    marginHorizontal: wp('5%'),
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#39D697',
    borderRadius: 75,
  },
  viewImg: {
    backgroundColor: '#39D697',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  imgStyle: { height: 30, width: 30, tintColor: 'white' },
  text: { marginLeft: wp('7%') },
});
