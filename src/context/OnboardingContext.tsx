import { createContext } from 'react';

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
    clothes: '',
    onChangeClothes: () => {},
    furniture: '',
    onChangeFurniture: () => {},
    hobbies: '',
    onChangeHobbies: () => {},
  },
});

export default OnboardingContext;
