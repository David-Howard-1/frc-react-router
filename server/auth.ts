import api from "./api";

export async function authenticate(username?: string, password?: string) {
  // Base64 encoded username/password string
  const encodedAuth = btoa(`${username}:${password}`);

  try {
    const response = await api.post(
      `/databases/${process.env.FM_DATABASE_NAME}/sessions`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedAuth}`,
        },
      }
    );

    console.log(
      "Axios Response Data: " + JSON.stringify(response.data),
      "Status: " + response.status
    );

    // Type for response data
    type TResponseData = {
      response: {
        token: string;
      };
      messages: [{ code: string; message: string }];
    };
    const responseData: TResponseData = response.data;

    const token = responseData.response.token;

    console.log("Authentication successful. Token: " + token);

    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Authentication failed.");
  }
}
