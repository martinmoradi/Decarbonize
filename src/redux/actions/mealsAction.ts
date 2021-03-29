import { MealActionType, MealType } from '../types';

interface PostMealAttempt {
  type: MealActionType.POST_MEAL_ATTEMPT;
}

interface PostMealSuccess {
  type: MealActionType.POST_MEAL_SUCCESS;
  payload: MealType;
}

interface PostMealError {
  type: MealActionType.POST_MEAL_ERROR;
  payload: string;
}

interface FetchMealAttempt {
  type: MealActionType.FETCH_MEALS_ATTEMPT;
}

interface FetchMealSuccess {
  type: MealActionType.FETCH_MEALS_SUCCESS;
  payload: MealType;
}

interface FetchMealError {
  type: MealActionType.FETCH_MEALS_ERROR;
  payload: string;
}

interface DeleteMealAttempt {
  type: MealActionType.DELETE_MEAL_ATTEMPT;
}

interface DeleteMealSuccess {
  type: MealActionType.DELETE_MEAL_SUCCESS;
  payload: MealType;
}

interface DeleteMealError {
  type: MealActionType.DELETE_MEAL_ERROR;
  payload: string;
}

interface MealsReset {
  type: MealActionType.MEALS_RESET;
}

export type MealsAction =
  | PostMealAttempt
  | PostMealSuccess
  | PostMealError
  | FetchMealAttempt
  | FetchMealSuccess
  | FetchMealError
  | DeleteMealAttempt
  | DeleteMealSuccess
  | DeleteMealError
  | MealsReset;
