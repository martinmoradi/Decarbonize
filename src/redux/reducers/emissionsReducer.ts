import { EmissionsAction } from '../actions';
import { EmissionsActionType, EmissionsType } from '../types';

interface EmissionsStateType {
  data: EmissionsType;
  errorMessage: string | null;
  isLoading: boolean;
  isEmpty: boolean;
}

const initialState: EmissionsStateType = {
  data: {
    weekly_total: 0,
    monthly_total: 0,
    yearly_total: 0,
    weekly_landtrip_emissions: 0,
    monthly_landtrip_emissions: 0,
    yearly_landtrip_emissions: 0,
    weekly_airtrip_emissions: 0,
    monthly_airtrip_emissions: 0,
    yearly_airtrip_emissions: 0,
    weekly_travel_emissions: 0,
    monthly_travel_emissions: 0,
    yearly_travel_emissions: 0,
    weekly_alimentation: 0,
    monthly_alimentation: 0,
    yearly_alimentation: 0,
    weekly_housing: 0,
    monthly_housing: 0,
    yearly_housing: 0,
    weekly_spendings: 0,
    monthly_spendings: 0,
    yearly_spendings: 0,
    appliances: false,
    reduced_heating: false,
    eco_driving: false,
    tap_water: false,
    food_wastes: false,
    bulk_food: false,
    zero_wastes: false,
    total_car_emissions: 0,
    total_bus_emissions: 0,
    total_tramway_emissions: 0,
    total_metro_emissions: 0,
    total_train_emissions: 0,
    total_meals_emissions: 0,
    total_red_meat_emissions: 0,
    total_white_meat_emissions: 0,
    total_vegetarian_emissions: 0,
    total_vegan_emissions: 0,
    yearly_cars_emissions: 0,
    monthly_cars_emissions: 0,
    weekly_cars_emissions: 0,
    yearly_bus_emissions: 0,
    monthly_bus_emissions: 0,
    weekly_bus_emissions: 0,
    yearly_tramway_emissions: 0,
    monthly_tramway_emissions: 0,
    weekly_tramway_emissions: 0,
    yearly_metro_emissions: 0,
    monthly_metro_emissions: 0,
    weekly_metro_emissions: 0,
    yearly_train_emissions: 0,
    monthly_train_emissions: 0,
    weekly_train_emissions: 0,
  },
  errorMessage: null,
  isLoading: false,
  isEmpty: true,
};

const emissionReducer = (state = initialState, action: EmissionsAction): EmissionsStateType => {
  switch (action.type) {
    case EmissionsActionType.FETCH_EMISSIONS_ATTEMPT:
    case EmissionsActionType.POST_EMISSIONS_ATTEMPT:
    case EmissionsActionType.PUT_EMISSIONS_ATTEMPT:
      return {
        data: initialState.data,
        errorMessage: null,
        isLoading: true,
        isEmpty: true,
      };
    case EmissionsActionType.FETCH_EMISSIONS_SUCCESS:
    case EmissionsActionType.POST_EMISSIONS_SUCCESS:
    case EmissionsActionType.PUT_EMISSIONS_SUCCESS:
      return {
        data: action.payload,
        errorMessage: null,
        isLoading: false,
        isEmpty: false,
      };
    case EmissionsActionType.FETCH_EMISSIONS_ERROR:
    case EmissionsActionType.POST_EMISSIONS_ERROR:
    case EmissionsActionType.PUT_EMISSIONS_ERROR:
      return {
        data: initialState.data,
        errorMessage: action.payload,
        isLoading: false,
        isEmpty: true,
      };
    case EmissionsActionType.EMISSIONS_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default emissionReducer;
