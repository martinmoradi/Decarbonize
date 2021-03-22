export const headers = (token: string | null = null) => {
  const header = new Headers({
    'Content-Type': 'application/json',
  });
  if (token) header.append('Authorization', token);
  return header;
};
