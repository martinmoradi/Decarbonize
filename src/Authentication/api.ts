import { userPropsType, quizPropsType } from '../Authentication/authContext/authTypes';

export const config = (method: string, body: userPropsType) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: body.email,
        password: body.password,
        password_confirmation: body.passwordConfirmation,
      },
    }),
  };
};

export const configQuiz = (method: string, body: quizPropsType, token: string | null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      
        breakfasts_per_week: body.breakfasts_per_week,
        clothes: body.clothes,
        electricity_consumption: body.electricity_consumption,
        fuel_consumption: body.fuel_consumption,
        furnitures: body.furnitures,
        gas_consumption: body.gas_consumption,
        house_surface: body.house_surface,
        others: body.others,
        red_meats_per_week: body.red_meats_per_week,
        roommates: body.roommates,
        vegan_per_week: body.vegan_per_week,
        vegetarian_per_week: body.vegetarian_per_week,
        white_meats_per_week: body.white_meats_per_week,
        wood_consumption: body.wood_consumption,
        wood_type: body.wood_type ,
      }),
  };
};
// Accept: 'application/json',
