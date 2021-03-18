import React, { useState } from 'react';
import OnboardingContext from './OnboardingContext';
import { onboardingStateType } from './onboardingContextTypes';

type PropsOnboardingProviders = {
  children: JSX.Element | JSX.Element[];
};

export const OnboardingProvider = ({ children }: PropsOnboardingProviders) => {
  const [breakfast, setBreakfast] = useState(0);
  const [redMeat, setRedMeat] = useState(0);
  const [whiteMeat, setWhiteMeat] = useState(0);
  const [vegan, setVegan] = useState(0);
  const [vegetarian, setVegetarian] = useState(0);
  const [people, setPeople] = useState(0);
  const [surface, setSurface] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [gas, setGas] = useState(0);
  const [woodType, setWoodType] = useState('');
  const [wood, setWood] = useState(0);
  const [ful, setFul] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [furniture, setFurniture] = useState(0);
  const [hobbies, setHobbies] = useState(0);

  const initialState: onboardingStateType = {
    food: {
      breakfast: breakfast,
      onChangeBreakfast: setBreakfast,
      redMeat: redMeat,
      onChangeRedMeat: setRedMeat,
      whiteMeat: whiteMeat,
      onChangeWhiteMeat: setWhiteMeat,
      vegan: vegan,
      onChangeVegan: setVegan,
      vegetarian: vegetarian,
      onChangeVegetarian: setVegetarian,
    },

    energy: {
      people: people,
      onChangePeople: setPeople,
      surface: surface,
      onChangeSurface: setSurface,
      electricity: electricity,
      onChangeElectricity: setElectricity,
      gas: gas,
      onChangeGas: setGas,
      woodType: woodType,
      onChangeWoodType: setWoodType,
      wood: wood,
      onChangeWood: setWood,
      ful: ful,
      onChangeFul: setFul,
    },

    splending: {
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
