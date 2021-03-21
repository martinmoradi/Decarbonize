interface OnboardingStateType {
  breakfasts_per_week: number;
  clothes: number;
  electricity_consumption: number;
  fuel_consumption: number;
  furnitures: number;
  gas_consumption: number;
  house_surface: number;
  others: number;
  red_meats_per_week: number;
  roommates: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
  white_meats_per_week: number;
  wood_consumption: number;
  wood_type: string;
}

const initialState = {
  breakfasts_per_week: 0,
  clothes: 0,
  electricity_consumption: 0,
  fuel_consumption: 0,
  furnitures: 0,
  gas_consumption: 0,
  house_surface: 0,
  others: 0,
  red_meats_per_week: 0,
  roommates: 0,
  vegan_per_week: 0,
  vegetarian_per_week: 0,
  white_meats_per_week: 0,
  wood_consumption: 0,
  wood_type: 'wood_logs',
};

const onboardingReducer = () => {
  return 0;
};

export default onboardingReducer;
