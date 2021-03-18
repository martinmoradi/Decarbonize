import { createContext } from 'react';
import { onboardingStateType } from './onboardingContextTypes';

const initialState: onboardingStateType = {
  food: {
    breakfast: 0,
    onChangeBreakfast: () => {},
    diet: '',
    onChangeDiet: () => {},
  },

  energy: {
    people: 0,
    onChangePeople: () => {},
    surface: 0,
    onChangeSurface: () => {},
    heat: '',
    onChangeHeat: () => {},
  },

  habit: {
    clothes: 0,
    onChangeClothes: () => {},
    furniture: 0,
    onChangeFurniture: () => {},
    hobbies: 0,
    onChangeHobbies: () => {},
  },
};

const OnboardingContext = createContext({
  food: {
    breakfast: 0,
    onChangeBreakfast: () => {},
    diet: '',
    onChangeDiet: () => {},
  },

  energy: {
    people: 0,
    onChangePeople: () => {},
    surface: 0,
    onChangeSurface: () => {},
    heat: '',
    onChangeHeat: () => {},
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
