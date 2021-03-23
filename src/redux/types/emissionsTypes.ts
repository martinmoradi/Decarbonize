export enum EmissionsActionType {
  POST_EMISSIONS_ATTEMPT = 'post_emissions_attempt',
  POST_EMISSIONS_SUCCESS = 'post_emissions_success',
  POST_EMISSIONS_ERROR = 'post_emissions_error',
  FETCH_EMISSIONS_ATTEMPT = 'fetch_emissions_attempt',
  FETCH_EMISSIONS_SUCCESS = 'fetch_emissions_success',
  FETCH_EMISSIONS_ERROR = 'fetch_emissions_error',
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
}
