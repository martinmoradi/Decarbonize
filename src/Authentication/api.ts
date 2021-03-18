export interface userPropsType {
  email: string;
  password: string;
  remember: boolean;
}

export const config = (method: string, body: userPropsType) => {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: body.email,
        password: body.password,
      },
    }),
  };
};
