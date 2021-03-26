import { EmissionsActionType, EmissionsType, FixedEmissionsType } from '../types';
import { EmissionsAction } from '../actions';

interface FixedEmissionsStateType {
  data: FixedEmissionsType;
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: FixedEmissionsStateType = {
  data: {
  breakfasts_per_week: 0,
  red_meats_per_week: 0,
  white_meats_per_week: 0,
  vegan_per_week: 0,
  vegetarian_per_week: 0,
  roommates: 0,
  house_surface: 0,
  electricity_consumption: 0,
  gas_consumption: 0,
  wood_consumption: 0,
  fuel_consumption: 0,
  clothes: 0,
  furnitures: 0,
  wood_type: 'wood_logs',
  others: 0,
  id: 0,
  created_at: '',
  updated_at: '',
  user_id: 0,
  },
  errorMessage: null,
  isLoading: false,
}

const fixedEmissionsReducer = (state = initialState, action: EmissionsAction): FixedEmissionsStateType => {
  switch (action.type) {
    case EmissionsActionType.FETCH_FIXED_EMISSIONS_ATTEMPT:
      return {
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
      };
      case EmissionsActionType.FETCH_FIXED_EMISSIONS_SUCCESS:
        return {
          data: action.payload,
          errorMessage: null,
          isLoading: false,
        };
        case EmissionsActionType.FETCH_FIXED_EMISSIONS_ERROR:
          return {
            data: initialState.data,
            errorMessage: action.payload,
            isLoading: false,
          };
          default:
      return state;
        }
      };

      export default fixedEmissionsReducer;