interface userProps {
  email?: string;
  password?: string;
}

export const config = (method: string, body: userProps) => {
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
