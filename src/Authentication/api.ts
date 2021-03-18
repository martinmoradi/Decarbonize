import { userPropsType } from '../Authentication/authContext/authTypes';

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
// Accept: 'application/json',
