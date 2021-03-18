import { createContext } from 'react';
import { onboardingStateType } from './onboardingContextTypes';

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
});

export default OnboardingContext;
