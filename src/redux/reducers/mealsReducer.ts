import { MealActionType, MealType, EmissionsActionType } from '../types';
import { MealsAction } from '../actions';
import { useDispatch } from 'react-redux';

const dispatch= useDispatch();

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
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case MealActionType.POST_MEAL_SUCCESS:
      dispatch({
        type: EmissionsActionType.POST_EMISSIONS_SUCCESS,
        payload: action.payload.emissions,
      });
      return {
        data: action.payload.meals,
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
