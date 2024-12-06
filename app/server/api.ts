import axios from 'axios';

const BASE_URL =
  process.env.FILEMAKER_URL ||
  'FILEMAKER_URL=https://<your-filemaker-server>/fmi/data/v2';

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Request interceptor: Add Authorization token dynamically
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('filemaker_token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized: Please re-authenticate.');
    }
    return Promise.reject(error);
  }
);

export default api;
