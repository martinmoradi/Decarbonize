export interface IOnboardingStateType {
  food: {
    breakfast: number;
    onChangeBreakfast: (value: React.SetStateAction<number>) => void;
    redMeat: number;
    onChangeRedMeat: (value: React.SetStateAction<number>) => void;
    whiteMeat: number;
    onChangeWhiteMeat: (value: React.SetStateAction<number>) => void;
    vegan: number;
    onChangeVegan: (value: React.SetStateAction<number>) => void;
    vegetarian: number;
    onChangeVegetarian: (value: React.SetStateAction<number>) => void;
  };

  energy: {
    people: number;
    onChangePeople: (value: React.SetStateAction<number>) => void;
    surface: number;
    onChangeSurface: (value: React.SetStateAction<number>) => void;
    electricity: number;
    onChangeElectricity: (value: React.SetStateAction<number>) => void;
    gas: number;
    onChangeGas: (value: React.SetStateAction<number>) => void;
    woodType: string;
    onChangeWoodType: (value: React.SetStateAction<string>) => void;
    wood: number;
    onChangeWood: (value: React.SetStateAction<number>) => void;
    fuel: number;
    onChangeFuel: (value: React.SetStateAction<number>) => void;
    gasHeating: boolean;
    onChangeGasHeating: (value: React.SetStateAction<boolean>) => void;
    woodHeating: boolean;
    onChangeWoodHeating: (value: React.SetStateAction<boolean>) => void;
    fuelHeating: boolean;
    onChangeFuelHeating: (value: React.SetStateAction<boolean>) => void;
  };

  spending: {
    clothes: number;
    onChangeClothes: (value: React.SetStateAction<number>) => void;
    furniture: number;
    onChangeFurniture: (value: React.SetStateAction<number>) => void;
    hobbies: number;
    onChangeHobbies: (value: React.SetStateAction<number>) => void;
  };

  onboardingData: IOnboardingDataType;
}

export interface IOnboardingDataType {
  house_surface: number;
  electricity_consumption: number;
  gas_consumption: number;
  wood_type: string;
  wood_consumption: number;
  fuel_consumption: number;
  roommates: number;
  clothes: number;
  furnitures: number;
  others: number;
  breakfasts_per_week: number;
  red_meats_per_week: number;
  vegan_per_week: number;
  vegetarian_per_week: number;
  white_meats_per_week: number;
}

export type PropsSlide = {
  onPress: () => void;
};
