import React, { useState } from 'react';
import OnboardingContext from './OnboardingContext';
import { onboardingStateType } from './onboardingContextTypes';

type PropsOnboardingProviders = {
  children: JSX.Element | JSX.Element[];
};

export const OnboardingProvider = ({ children }: PropsOnboardingProviders) => {
  const [breakfast, setBreakfast] = useState(0);
  const [grocery, setGrocery] = useState('');
  const [dairy, setDairy] = useState('');
  const [people, setPeople] = useState(0);
  const [surface, setSurface] = useState(0);
  const [heat, setHeat] = useState('');
  const [consumption, setConsumption] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [furniture, setFurniture] = useState(0);
  const [hobbies, setHobbies] = useState(0);

  const initialState: onboardingStateType = {
    food: {
      breakfast: breakfast,
      onChangeBreakfast: setBreakfast,
      grocery: grocery,
      onChangeGrocery: setGrocery,
      dairy: dairy,
      onChangeDairy: setDairy,
    },

    energy: {
      people: people,
      onChangePeople: setPeople,
      surface: surface,
      onChangeSurface: setSurface,
      heat: heat,
      onChangeHeat: setHeat,
      consumption: consumption,
      onChangeConsumption: setConsumption,
    },

    habit: {
      clothes: clothes,
      onChangeClothes: setClothes,
      furniture: furniture,
      onChangeFurniture: setFurniture,
      hobbies: hobbies,
      onChangeHobbies: setHobbies,
    },
  };
  return <OnboardingContext.Provider value={initialState}>{children}</OnboardingContext.Provider>;
};
