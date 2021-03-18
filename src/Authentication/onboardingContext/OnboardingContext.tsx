import { createContext } from 'react';

const OnboardingContext = createContext({
  food: {
    breakfast: 0,
    onChangeBreakfast: () => {},
    grocery: '',
    onChangeGrocery: () => {},
    dairy: '',
    onChangeDairy: () => {},
  },

  energy: {
    people: 0,
    onChangePeople: () => {},
    surface: 0,
    onChangeSurface: () => {},
    heat: '',
    onChangeHeat: () => {},
    consumption: 0,
    onChangeConsumption: () => {},
  },

  habit: {
    clothes: 0,
    onChangeClothes: () => {},
    furniture: 0,
    onChangeFurniture: () => {},
    hobbies: 0,
    onChangeHobbies: () => {},
  },
});

export default OnboardingContext;
