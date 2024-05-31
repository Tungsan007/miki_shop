import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const axiosClient = axios.create({
  baseURL: '/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Để request gửi kèm cookie
});

axiosClient.interceptors.request.use(async (config) => {
  let accessToken = window.localStorage.getItem('accessToken');

  if (accessToken) {
    const decodedToken = jwt_decode(accessToken);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      accessToken = await refreshToken();
      localStorage.setItem('accessToken', accessToken);
    }
    config.headers.Authorization = 'Bearer ' + accessToken;
  }
  return config;
});
