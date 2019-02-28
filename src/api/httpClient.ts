import axios from 'axios';
import Cookies from 'js-cookie';

const API_HOST = 'http://localhost:3000';

const DEFAULT_OPTIONS = {
  baseURL: `${API_HOST}/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

const getHttpClient = () => {
  const instance = axios.create(DEFAULT_OPTIONS);

  instance.interceptors.request.use((config) => {
    const token = Cookies.get('token');

    config.headers.Authorization =  token ? `Bearer ${token}` : '';

    return config;
  });

  return instance;
};

export default getHttpClient();
