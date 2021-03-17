import React from 'react';
import OnboardingContext from './OnboardingContext';

type PropsGlobalProviders = {
  children: JSX.Element;
};

const GlobalProvider = ({ children }: PropsGlobalProviders) => {
  return (
    <OnboardingContext.Provider
      value={{
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
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export default GlobalProvider;
