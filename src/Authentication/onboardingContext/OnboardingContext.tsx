import { createContext } from 'react';
import { onboardingStateType } from '../onboardingTypes';

const OnboardingContext = createContext<onboardingStateType>({
  food: {
    breakfast: 0,
    onChangeBreakfast: () => {},
    redMeat: 0,
    onChangeRedMeat: () => {},
    whiteMeat: 0,
    onChangeWhiteMeat: () => {},
    vegan: 0,
    onChangeVegan: () => {},
    vegetarian: 0,
    onChangeVegetarian: () => {},
  },

  energy: {
    people: 0,
    onChangePeople: () => {},
    surface: 0,
    onChangeSurface: () => {},
    electricity: 0,
    onChangeElectricity: () => {},
    gas: 0,
    onChangeGas: () => {},
    woodType: '',
    onChangeWoodType: () => {},
    wood: 0,
    onChangeWood: () => {},
    fuel: 0,
    onChangeFuel: () => {},
    gasHeating: false,
    onChangeGasHeating: () => {},
    woodHeating: false,
    onChangeWoodHeating: () => {},
    fuelHeating: false,
    onChangeFuelHeating: () => {},
  },

  spending: {
    clothes: 0,
    onChangeClothes: () => {},
    furniture: 0,
    onChangeFurniture: () => {},
    hobbies: 0,
    onChangeHobbies: () => {},
  },

  onboardingData: {
    house_surface: 0,
    electricity_consumption: 0,
    gas_consumption: 0,
    wood_type: '',
    wood_consumption: 0,
    fuel_consumption: 0,
    roommates: 0,
    clothes: 0,
    furnitures: 0,
    others: 0,
    breakfasts_per_week: 0,
    red_meats_per_week: 0,
    vegan_per_week: 0,
    vegetarian_per_week: 0,
    white_meats_per_week: 0,
  },
});

export default OnboardingContext;
