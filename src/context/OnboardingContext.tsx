import { createContext } from 'react';

const OnboardingContext = createContext({
  food: {
    breakfast: '',
    onChangeBreakfast: (e: string) => {},
    diet: '',
    onChangeDiet: (e: string) => {},
  },

  energy: {
    people: '',
    onChangePeople: (e: string) => {},
    surface: '',
    onChangeSurface: (e: string) => {},
    heat: '',
    onChangeHeat: (e: string) => {},
  },

  habit: {
    clothes: '',
    onChangeClothes: (e: string) => {},
    furniture: '',
    onChangeFurniture: (e: string) => {},
    hobbies: '',
    onChangeHobbies: (e: string) => {},
  },
});

export default OnboardingContext;
