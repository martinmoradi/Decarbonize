import {
  OnboardingFoodActionType,
  OnboardingSpendingActionType,
  OnboardingEnergyActionType,
} from '../types';

interface SetRoommates {
  type: OnboardingEnergyActionType.SET_ROOMMATES;
  payload: number;
}

interface SetHouseSurface {
  type: OnboardingEnergyActionType.SET_HOUSE_SURFACE;
  payload: number;
}

interface SetElectricityConsumption {
  type: OnboardingEnergyActionType.SET_ELECTRICITY_CONSUMPTION;
  payload: number;
}

interface SetGasConsumption {
  type: OnboardingEnergyActionType.SET_GAS_CONSUMPTION;
  payload: number;
}

interface SetWoodConsumption {
  type: OnboardingEnergyActionType.SET_WOOD_CONSUMPTION;
  payload: number;
}

interface SetWoodType {
  type: OnboardingEnergyActionType.SET_WOOD_TYPE;
  payload: 'wood_logs' | 'wood_pellets';
}

interface SetFuelConsumption {
  type: OnboardingEnergyActionType.SET_FUEL_CONSUMPTION;
  payload: number;
}

interface SetIsGasHeating {
  type: OnboardingEnergyActionType.SET_IS_GAS_HEATING;
  payload: boolean;
}

interface SetIsWoodHeating {
  type: OnboardingEnergyActionType.SET_IS_WOOD_HEATING;
  payload: boolean;
}

interface SetIsFuelHeating {
  type: OnboardingEnergyActionType.SET_IS_FUEL_HEATING;
  payload: boolean;
}

interface SetBreakfast {
  type: OnboardingFoodActionType.SET_BREAKFAST;
  payload: number;
}

interface SetRedMeat {
  type: OnboardingFoodActionType.SET_RED_MEAT;
  payload: number;
}

interface SetWhiteMeat {
  type: OnboardingFoodActionType.SET_WHITE_MEAT;
  payload: number;
}

interface SetVegan {
  type: OnboardingFoodActionType.SET_VEGAN;
  payload: number;
}

interface SetVegetarian {
  type: OnboardingFoodActionType.SET_VEGETARIAN;
  payload: number;
}

interface SetClothes {
  type: OnboardingSpendingActionType.SET_CLOTHES;
  payload: number;
}

interface SetFurniture {
  type: OnboardingSpendingActionType.SET_FURNITURE;
  payload: number;
}

interface SetOthers {
  type: OnboardingSpendingActionType.SET_OTHERS;
  payload: number;
}

export type OnboardingAction =
  | SetRoommates
  | SetHouseSurface
  | SetElectricityConsumption
  | SetGasConsumption
  | SetWoodType
  | SetWoodConsumption
  | SetFuelConsumption
  | SetIsGasHeating
  | SetIsWoodHeating
  | SetIsFuelHeating
  | SetBreakfast
  | SetRedMeat
  | SetWhiteMeat
  | SetVegan
  | SetVegetarian
  | SetClothes
  | SetFurniture
  | SetOthers;
