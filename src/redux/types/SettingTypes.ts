export enum SettingFoodActionType {
  PUT_BREAKFAST = 'put_breakfast',
  PUT_RED_MEAT = 'put_red_meat',
  PUT_WHITE_MEAT = 'put_white_meat',
  PUT_VEGAN = 'put_vegan',
  PUT_VEGETARIAN = 'put_vegetarian',
}

export interface SettingFoodType {
  breakfasts_per_week: number;
  red_meats_per_week: number;
  white_meats_per_week: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
}
export type WoodsType = 'wood_logs' | 'wood_pellets';

export interface SettingEnergyType {
  roommates: number;
  house_surface: number;
  electricity_consumption: number;
  gas_consumption: number;
  wood_type?: WoodsType;
  wood_consumption?: number;
  fuel_consumption?: number;
  isGasHeating?: boolean;
  isWoodHeating?: boolean;
  isFuelHeating?: boolean;
}

export interface SettingSpendingType {
  clothes: number;
  furniture: number;
  others: number;
}


export interface SettingType {
  breakfasts_per_week?: number;
  red_meats_per_week?: number;
  white_meats_per_week?: number;
  vegan_per_week?: number;
  vegetarian_per_week?: number;
  roommates?: number;
  house_surface?: number;
  electricity_consumption?: number;
  gas_consumption?: number;
  wood_type?: WoodsType;
  wood_consumption?: number;
  fuel_consumption?: number;
  isGasHeating?: boolean;
  isWoodHeating?: boolean;
  isFuelHeating?: boolean;
  clothes?: number;
  furniture?: number;
  others?: number;
}
