export async function getFmAuthToken() {
  const baseUrl = process.env.FILEMAKER_URL;
  const dbName = process.env.FM_DATABASE_NAME;
  const username = process.env.FILEMAKER_USERNAME;
  const password = process.env.FILEMAKER_PASSWORD;

  const encodedAuth = btoa(`${username}:${password}`);
  console.log("Base64 Auth Token: ", encodedAuth);

  try {
    const response = await fetch(`${baseUrl}/databases/${dbName}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${encodedAuth}`,
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Type for the response body
    type TResponse = {
      response: {
        token: string;
      };
      messages: [{ code: string; message: string }];
    };

    // Response body
    const responseData: TResponse = await response.json();
    console.log("Response: ", responseData);

    // Parse token from response body
    const token = responseData?.response.token;
    if (!token) {
      throw new Error("No token received from FileMaker");
    }

    return token;
  } catch (error) {
    console.error("Error authenticating with FileMaker:", error);
    return new Error("Unable to authenticate");
  }
}
