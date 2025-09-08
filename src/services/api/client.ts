import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth
apiClient.interceptors.request.use(
  async (config) => {
    // Token will be added here after Auth0 setup
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/api/auth/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;