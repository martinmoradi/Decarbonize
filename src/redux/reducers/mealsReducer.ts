import { MealActionType , MealType} from '../types';
import { MealsAction } from '../actions';

interface MealStateType {
    data: MealType;
    errorMessage: string | null;
    isLoading: boolean;
}

const initialState: MealStateType ={
    data: {meals: [{
        meal_type: "",
        amount: 0,
        created_at: "",
        updated_at: "",
        id: 0,
        user_id: 0,
    }]},
    errorMessage: null,
    isLoading: false,
}

const mealReducer = (state = initialState, action: MealsAction): MealStateType => {
    switch(action.type) {
      case MealActionType.FETCH_MEALS_ATTEMPT:
      case MealActionType.POST_MEAL_ATTEMPT:
        return {
          data: initialState.data,
          errorMessage: null,
          isLoading: true,
        };
      case MealActionType.FETCH_MEALS_SUCCESS:
      case MealActionType.POST_MEAL_SUCCESS:
        return {
          data:  action.payload ,
          errorMessage: null,
          isLoading: false,
  
        };
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