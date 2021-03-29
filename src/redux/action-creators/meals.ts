import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { headers } from '../../tools/api';
import { EmissionsAction, MealsAction } from '../actions';
import { EmissionsActionType, MealActionType } from '../types';

export const postMeal = (mealType: string) => {
  return async (dispatch: Dispatch<MealsAction | EmissionsAction>) => {
    dispatch({
      type: MealActionType.POST_MEAL_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/api/v1/meals`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({ meal_type: mealType }),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: MealActionType.POST_MEAL_SUCCESS,
        payload: data.meals,
      });
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data.emissions,
      });
    } catch (err) {
      dispatch({
        type: MealActionType.POST_MEAL_ERROR,
        payload: err.message,
      });
    }
  };
};

export const fetchMeals = () => {
  return async (dispatch: Dispatch<MealsAction>) => {
    dispatch({
      type: MealActionType.FETCH_MEALS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const response = await fetch('https://perruches-decarbonize.herokuapp.com/api/v1/meals', {
        method: 'GET',
        headers: headers(token),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: MealActionType.FETCH_MEALS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: MealActionType.FETCH_MEALS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const deleteMeal = (id: number) => {
  return async (dispatch: Dispatch<MealsAction | EmissionsAction>) => {
    dispatch({
      type: MealActionType.DELETE_MEAL_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/meals/${id}`,
        {
          method: 'DELETE',
          headers: headers(token),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: MealActionType.DELETE_MEAL_SUCCESS,
        payload: data.meals,
      });
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data.emissions,
      });
    } catch (err) {
      dispatch({
        type: MealActionType.DELETE_MEAL_ERROR,
        payload: err.message,
      });
    }
  };
};
