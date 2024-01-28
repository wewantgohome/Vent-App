import axios from 'axios';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultClient = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

const client = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('access');
    if (token) {
      config.headers.accessToken = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { defaultClient, client };
