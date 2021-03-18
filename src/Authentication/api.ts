import AsyncStorage from '@react-native-async-storage/async-storage';
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


export const configDelete = (method: string, token: string | null) => ( {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    } 
)
  




// Accept: 'application/json',
