import React, { useState } from 'react';
import OnboardingContext from './OnboardingContext';

type PropsGlobalProviders = {
  children: JSX.Element;
};

const GlobalOnboardingProvider = ({ children }: PropsGlobalProviders) => {
  const [people, setPeople] = useState('');
  const [surface, setSurface] = useState('');
  const [heat, setHeat] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [diet, setDiet] = useState('');
  const [clothes, setClothes] = useState('');
  const [furniture, setFurniture] = useState('');
  const [hobbies, setHobbies] = useState('');
  return (
    <OnboardingContext.Provider
      value={{
        food: {
          breakfast: breakfast,
          onChangeBreakfast: (e: string) => setBreakfast(e),
          diet: diet,
          onChangeDiet: (e: string) => setDiet(e),
        },

        energy: {
          people: people,
          onChangePeople: (e: string) => setPeople(e),
          surface: surface,
          onChangeSurface: (e: string) => setSurface(e),
          heat: heat,
          onChangeHeat: (e: string) => setHeat(e),
        },

        habit: {
          clothes: clothes,
          onChangeClothes: (e: string) => setClothes(e),
          furniture: furniture,
          onChangeFurniture: (e: string) => setFurniture(e),
          hobbies: hobbies,
          onChangeHobbies: (e: string) => setHobbies(e),
        },
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export default GlobalOnboardingProvider;
