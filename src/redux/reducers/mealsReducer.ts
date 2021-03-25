import { MealActionType, MealType } from '../types';
import { MealsAction } from '../actions';

interface MealStateType {
  data: MealType;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: MealStateType = {
  data: {
    red_meat_meals: [
      {
        meal_type: 'red_meat',
        amount: 0,
        created_at: '',
        updated_at: '',
        id: 0,
        user_id: 0,
      },
    ],
    white_meat_meals: [
      {
        meal_type: 'white_meat',
        amount: 0,
        created_at: '',
        updated_at: '',
        id: 0,
        user_id: 0,
      },
    ],
    vegetarian_meals: [
      {
        meal_type: 'vegetarian',
        amount: 0,
        created_at: '',
        updated_at: '',
        id: 0,
        user_id: 0,
      },
    ],
    vegan_meals: [
      {
        meal_type: 'vegan',
        amount: 0,
        created_at: '',
        updated_at: '',
        id: 0,
        user_id: 0,
      },
    ],
  },
  errorMessage: null,
  isLoading: false,
};

const mealReducer = (state = initialState, action: MealsAction): MealStateType => {
  switch (action.type) {
    case MealActionType.DELETE_MEAL_ATTEMPT:
    case MealActionType.FETCH_MEALS_ATTEMPT:
    case MealActionType.POST_MEAL_ATTEMPT:
      return {
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
      };
    case MealActionType.DELETE_MEAL_SUCCESS:
    case MealActionType.FETCH_MEALS_SUCCESS:
    case MealActionType.POST_MEAL_SUCCESS:
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case MealActionType.DELETE_MEAL_ERROR:
    case MealActionType.FETCH_MEALS_ERROR:
    case MealActionType.POST_MEAL_ERROR:
      return {
        data: initialState.data,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default mealReducer;
