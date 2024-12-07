import api from "./api";

export async function authenticate(username: string, password: string) {
  try {
    const response = await api.post(
      `/databases/${process.env.FM_DATABASE_NAME}/sessions`,
      {},
      {
        auth: {
          username,
          password,
        },
      }
    );

    return response.data.response.token;
  } catch (error) {
    console.error(error);
    throw new Error("Authentication failed.");
  }
}
