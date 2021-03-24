export enum OnboardingFoodActionType {
  SET_BREAKFAST = 'set_breakfast',
  SET_RED_MEAT = 'set_red_meat',
  SET_WHITE_MEAT = 'set_white_meat',
  SET_VEGAN = 'set_vegan',
  SET_VEGETARIAN = 'set_vegetarian',
}

export enum OnboardingSpendingActionType {
  SET_CLOTHES = 'set_clothes',
  SET_FURNITURE = 'set_furniture',
  SET_OTHERS = 'set_others',
}

export enum OnboardingEnergyActionType {
  SET_ROOMMATES = 'set_roommates',
  SET_HOUSE_SURFACE = 'set_house_surface',
  SET_ELECTRICITY_CONSUMPTION = 'set_electricity_consumption',
  SET_GAS_CONSUMPTION = 'set_gas_consumption',
  SET_WOOD_TYPE = 'set_wood_type',
  SET_WOOD_CONSUMPTION = 'set_wood_consumption',
  SET_FUEL_CONSUMPTION = 'set_fuel_consumption',
  SET_IS_GAS_HEATING = 'set_is_gas_heating',
  SET_IS_WOOD_HEATING = 'set_is_wood_heating',
  SET_IS_FUEL_HEATING = 'set_is_fuel_heating',
}

export interface OnboardingFoodStateType {
  breakfasts_per_week: number;
  red_meats_per_week: number;
  white_meats_per_week: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
}

export type WoodsType = 'wood_logs' | 'wood_pellets';

export interface OnboardingEnergyStateType {
  roommates: number;
  house_surface: number;
  electricity_consumption: number;
  gas_consumption: number;
  wood_type: WoodsType;
  wood_consumption: number;
  fuel_consumption: number;
  isGasHeating: boolean;
  isWoodHeating: boolean;
  isFuelHeating: boolean;
}

export interface OnboardingSpendingStateType {
  clothes: number;
  furniture: number;
  others: number;
}

export interface OnboardingType
  extends OnboardingFoodStateType,
    OnboardingEnergyStateType,
    OnboardingSpendingStateType {}
