export interface IOnboardingStateType {
  food: {
    breakfast: number | null;
    onChangeBreakfast: (value: React.SetStateAction<number | null>) => void | null;
    redMeat: number | null;
    onChangeRedMeat: (value: React.SetStateAction<number | null>) => void | null;
    whiteMeat: number | null;
    onChangeWhiteMeat: (value: React.SetStateAction<number | null>) => void | null;
    vegan: number | null;
    onChangeVegan: (value: React.SetStateAction<number | null>) => void | null;
    vegetarian: number | null;
    onChangeVegetarian: (value: React.SetStateAction<number | null>) => void | null;
  };

  energy: {
    people: number;
    onChangePeople: (value: React.SetStateAction<number>) => void;
    surface: number | null;
    onChangeSurface: (value: React.SetStateAction<number | null>) => void | null;
    electricity: number | null;
    onChangeElectricity: (value: React.SetStateAction<number | null>) => void | null;
    gas: number | null;
    onChangeGas: (value: React.SetStateAction<number | null>) => void | null;
    woodType: string | null;
    onChangeWoodType: (value: React.SetStateAction<string | null>) => void | null;
    wood: number | null;
    onChangeWood: (value: React.SetStateAction<number | null>) => void | null;
    fuel: number | null;
    onChangeFuel: (value: React.SetStateAction<number | null>) => void | null;
    gasHeating: boolean;
    onChangeGasHeating: (value: React.SetStateAction<boolean>) => void;
    woodHeating: boolean;
    onChangeWoodHeating: (value: React.SetStateAction<boolean>) => void;
    fuelHeating: boolean;
    onChangeFuelHeating: (value: React.SetStateAction<boolean>) => void;
  };

  spending: {
    clothes: number | null;
    onChangeClothes: (value: React.SetStateAction<number | null>) => void | null;
    furniture: number | null;
    onChangeFurniture: (value: React.SetStateAction<number | null>) => void | null;
    hobbies: number | null;
    onChangeHobbies: (value: React.SetStateAction<number | null>) => void | null;
  };

  onboardingData: IOnboardingDataType,
}

export interface IOnboardingDataType {
  house_surface: number | null,
  electricity_consumption: number | null,
  gas_consumption: number | null,
  wood_type: string,
  wood_consumption: number | null,
  fuel_consumption: number | null,
  roommates: number | null,
  clothes: number | null,
  furnitures: number | null,
  others: number | null,
  breakfasts_per_week: number | null,
  red_meats_per_week: number | null,
  vegan_per_week: number | null,
  vegetarian_per_week: number | null,
  white_meats_per_week: number | null
}

export type PropsSlide = {
  onPress: () => void;
};
