import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
});

// мидлвор  для проверки авторизации при любом запросе
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
