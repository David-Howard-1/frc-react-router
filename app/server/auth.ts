import api from './api';

export const authenticate = async (username: string, password: string) => {
  const response = await api.post(
    `/databases/${process.env.FM_DATABASE_NAME}/sessions`,
    {},
    { auth: { username, password } }
  );
  return response.data.response.token;
};
