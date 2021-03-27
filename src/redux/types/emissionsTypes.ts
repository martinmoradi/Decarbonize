export enum EmissionsActionType {
  POST_EMISSIONS_ATTEMPT = 'post_emissions_attempt',
  POST_EMISSIONS_SUCCESS = 'post_emissions_success',
  POST_EMISSIONS_ERROR = 'post_emissions_error',
  FETCH_EMISSIONS_ATTEMPT = 'fetch_emissions_attempt',
  FETCH_EMISSIONS_SUCCESS = 'fetch_emissions_success',
  FETCH_EMISSIONS_ERROR = 'fetch_emissions_error',
  FETCH_FIXED_EMISSIONS_ATTEMPT = 'fetch_fixed_emissions_attempt',
  FETCH_FIXED_EMISSIONS_SUCCESS = 'fetch_fixed_emissions_success',
  FETCH_FIXED_EMISSIONS_ERROR = 'fetch_fixed_emissions_error',
  PUT_EMISSIONS_ATTEMPT = 'put_emissions_attempt',
  PUT_EMISSIONS_SUCCESS = 'put_emissions_success',
  PUT_EMISSIONS_ERROR = 'put_emissions_error',
  EMISSIONS_RESET = 'emissions_reset',
}

export interface EmissionsType {
  weekly_total: number;
  monthly_total: number;
  yearly_total: number;
  weekly_landtrip_emissions: number;
  monthly_landtrip_emissions: number;
  yearly_landtrip_emissions: number;
  weekly_airtrip_emissions: number;
  monthly_airtrip_emissions: number;
  yearly_airtrip_emissions: number;
  weekly_travel_emissions: number;
  monthly_travel_emissions: number;
  yearly_travel_emissions: number;
  weekly_alimentation: number;
  monthly_alimentation: number;
  yearly_alimentation: number;
  weekly_housing: number;
  monthly_housing: number;
  yearly_housing: number;
  weekly_spendings: number;
  monthly_spendings: number;
  yearly_spendings: number;
  appliances: boolean;
  reduced_heating: boolean;
  eco_driving: boolean;
  tap_water: boolean;
  food_wastes: boolean;
  bulk_food: boolean;
  zero_wastes: boolean;
  total_car_emissions: number;
  total_bus_emissions: number;
  total_tramway_emissions: number;
  total_metro_emissions: number;
  total_train_emissions: number;
  total_meals_emissions: number;
  total_red_meat_emissions: number;
  total_white_meat_emissions: number;
  total_vegetarian_emissions: number;
  total_vegan_emissions: number;
  yearly_cars_emissions: number;
  monthly_cars_emissions: number;
  weekly_cars_emissions: number;
  yearly_bus_emissions: number;
  monthly_bus_emissions: number;
  weekly_bus_emissions: number;
  yearly_tramway_emissions: number;
  monthly_tramway_emissions: number;
  weekly_tramway_emissions: number;
  yearly_metro_emissions: number;
  monthly_metro_emissions: number;
  weekly_metro_emissions: number;
  yearly_train_emissions: number;
  monthly_train_emissions: number;
  weekly_train_emissions: number;
}

type WoodsType = 'wood_logs' | 'wood_pellets';
export interface FixedEmissionsType {
  breakfasts_per_week: number;
  red_meats_per_week: number;
  white_meats_per_week: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
  roommates: number;
  house_surface: number;
  electricity_consumption: number;
  gas_consumption: number;
  wood_consumption: number;
  fuel_consumption: number;
  clothes: number;
  furnitures: number;
  others: number;
  wood_type: WoodsType;
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
}
