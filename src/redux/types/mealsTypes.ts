export enum MealActionType {
  POST_MEAL_ATTEMPT = 'post_meal_attempt',
  POST_MEAL_SUCCESS = 'post_meal_success',
  POST_MEAL_ERROR = 'post_meal_error',
  DELETE_MEAL_ATTEMPT = 'delete_meal_attempt',
  DELETE_MEAL_SUCCESS = 'delete_meal_success',
  DELETE_MEAL_ERROR = 'delete_meal_error',
  FETCH_MEALS_ATTEMPT = 'fetch_meals_attempt',
  FETCH_MEALS_SUCCESS = 'fetch_meals_success',
  FETCH_MEALS_ERROR = 'fetch_meals_error',
  MEALS_RESET = 'meals_reset',
}

export type SingleMealType = {
  meal_type: string;
  amount: number;
  created_at: string;
  updated_at: string;
  id: number;
  user_id: number;
};

export interface MealType {
  red_meat_meals: SingleMealType[];
  white_meat_meals: SingleMealType[];
  vegetarian_meals: SingleMealType[];
  vegan_meals: SingleMealType[];
}

export type MealCategoryType = 'red_meat' | 'white_meat' | 'vegan' | 'vegetarian';
