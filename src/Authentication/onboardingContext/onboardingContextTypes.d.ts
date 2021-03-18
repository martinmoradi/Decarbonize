export interface onboardingStateType {
  food: {
    breakfast: number,
    onChangeBreakfast: (value: React.SetStateAction<number>) => void | null,
    diet: string,
    onChangeDiet: (value: React.SetStateAction<string>) => void | null,
  },

  energy: {
    people: number,
    onChangePeople: (value: React.SetStateAction<number>) => void | null,
    surface: number,
    onChangeSurface: (value: React.SetStateAction<number>) => void | null,
    heat: string,
    onChangeHeat: (value: React.SetStateAction<string>) => void | null,
    consumption: number,
    onChangeConsumption: (value: React.SetStateAction<number>) => void | null,
  },

  habit: {
    clothes: number,
    onChangeClothes: (value: React.SetStateAction<number>) => void | null,
    furniture: number,
    onChangeFurniture: (value: React.SetStateAction<number>) => void | null,
    hobbies: number,
    onChangeHobbies: (value: React.SetStateAction<number>) => void | null,
  },
}