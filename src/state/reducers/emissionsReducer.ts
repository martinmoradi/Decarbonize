import { EmissionsActionType, EmissionsType } from '../types';
import { EmissionsAction } from '../actions';

interface EmissionsStateType {
  data: EmissionsType;
  errorMessage: string | null;
  isLoading: boolean;
  isEmpty: boolean;
}

const initialState: EmissionsStateType = {
  data: {
    yearly_total: 0,
    monthly_total: 0,
    weekly_total: 0,
    weekly_landtrip_emissions: 0,
    monthly_landtrip_emissions: 0,
    yearly_landtrip_emissions: 0,
    weekly_airtrip_emissions: 0,
    monthly_airtrip_emissions: 0,
    yearly_airtrip_emissions: 0,
    monthly_alimentation: 0,
    yearly_alimentation: 0,
    weekly_housing: 0,
    monthly_housing: 0,
    yearly_housing: 0,
    weekly_spendings: 0,
    monthly_spendings: 0,
    yearly_spendings: 0,
    'appliances?': false,
    'reduced_heating?': false,
    'eco_driving?': false,
    'tap_water?': false,
    'food_wastes?': false,
    'bulk_food?': false,
    'zero_wastes?': false,
  },
  errorMessage: null,
  isLoading: false,
  isEmpty: true,
};

const emissionReducer = (state = initialState, action: EmissionsAction): EmissionsStateType => {
  switch (action.type) {
    case EmissionsActionType.POST_EMISSIONS_ATTEMPT:
      return {
        ...state,
        isLoading: true,
      };
    case EmissionsActionType.POST_EMISSIONS_SUCCESS:
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
        isEmpty: false,
      };
    case EmissionsActionType.POST_EMISSIONS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default emissionReducer;
