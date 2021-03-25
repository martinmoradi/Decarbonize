export enum MealActionType {
    POST_MEAL_ATTEMPT = 'post_meal_attempt',
    POST_MEAL_SUCCESS = 'post_meal_success',
    POST_MEAL_ERROR = 'post_meal_error',
    FETCH_MEALS_ATTEMPT = 'fetch_meals_attempt',
    FETCH_MEALS_SUCCESS = 'fetch_meals_success',
    FETCH_MEALS_ERROR = 'fetch_meals_error',
  }

export interface MealType{
  meals:{
    meal_type:string;
    amount:number;
    created_at: string;
    updated_at: string;
    id: number;
    user_id: number;
  }[]
}