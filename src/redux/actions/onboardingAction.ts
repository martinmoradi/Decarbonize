import {
  OnboardingFoodActionType,
  OnboardingSpendingActionType,
  OnboardingEnergyActionType,
} from '../types';

interface SetPeople {
  type: OnboardingEnergyActionType.SET_PEOPLE;
  payload: number;
}

interface SetSurface {
  type: OnboardingEnergyActionType.SET_SURFACE;
  payload: number;
}

interface SetElectricity {
  type: OnboardingEnergyActionType.SET_ELECTRICITY;
  payload: number;
}

interface SetGas {
  type: OnboardingEnergyActionType.SET_GAS;
  payload: number;
}

interface SetWood {
  type: OnboardingEnergyActionType.SET_WOOD;
  payload: number;
}

interface SetWoodType {
  type: OnboardingEnergyActionType.SET_WOOD_TYPE;
  payload: 'wood_logs' | 'wood_pellets';
}

interface SetFuel {
  type: OnboardingEnergyActionType.SET_FUEL;
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

interface SetHobbies {
  type: OnboardingSpendingActionType.SET_HOBBIES;
  payload: number;
}

export type OnboardingAction =
  | SetPeople
  | SetSurface
  | SetElectricity
  | SetGas
  | SetWoodType
  | SetWood
  | SetFuel
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
  | SetHobbies;
