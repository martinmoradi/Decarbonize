export interface onboardingStateType {
  food: {
    breakfast: number;
    onChangeBreakfast: () => void;
    diet: string;
    onChangeDiet: () => void;
  };

  energy: {
    people: number;
    onChangePeople: () => void;
    surface: number;
    onChangeSurface: () => void;
    heat: string;
    onChangeHeat: () => void;
  };

  habit: {
    clothes: number;
    onChangeClothes: () => void;
    furniture: number;
    onChangeFurniture: () => void;
    hobbies: number;
    onChangeHobbies: () => void;
  };
}
