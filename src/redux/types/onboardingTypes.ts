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
  SET_HOBBIES = 'set_hobbies',
}

export enum OnboardingEnergyActionType {
  SET_PEOPLE = 'set_people',
  SET_SURFACE = 'set_surface',
  SET_ELECTRICITY = 'set_electricity',
  SET_GAS = 'set_gas',
  SET_WOOD_TYPE = 'set_wood_type',
  SET_WOOD = 'set_wood',
  SET_FUEL = 'set_fuel',
  SET_IS_GAS_HEATING = 'set_is_gas_heating',
  SET_IS_WOOD_HEATING = 'set_is_wood_heating',
  SET_IS_FUEL_HEATING = 'set_is_fuel_heating',
}

export interface OnboardingFoodStateType {
  breakfast: number;
  redMeat: number;
  whiteMeat: number;
  vegan: number;
  vegetarian: number;
}

export type WoodsType = 'wood_logs' | 'wood_pellets';

export interface OnboardingEnergyStateType {
  people: number;
  surface: number;
  electricity: number;
  gas: number;
  woodType: WoodsType;
  wood: number;
  fuel: number;
  isGasHeating: boolean;
  isWoodHeating: boolean;
  isFuelHeating: boolean;
}

export interface OnboardingSpendingStateType {
  clothes: number;
  furniture: number;
  hobbies: number;
}

export interface OnboardingType
  extends OnboardingFoodStateType,
    OnboardingEnergyStateType,
    OnboardingSpendingStateType {}
