import axios from "axios";

const BASE_URL = process.env.FILEMAKER_URL || "/http://localhost:8080";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

const isBrowser = typeof window !== "undefined";

// Add a request interceptor for authorization
api.interceptors.request.use(
  (config) => {
    if (isBrowser) {
      const token = sessionStorage.getItem("filemaker_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },

  (error) => Promise.reject(error)
);

// Log responses
api.interceptors.response.use(
  (response) => {
    console.log("Axios Response:", {
      status: response.status,
      data: response.data,
      headers: response.headers,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Axios Response Error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else {
      console.error("Axios Error (no response):", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
