import { defaultClient } from '@lib/api/client';

export const signup = async (data) => {
  return await defaultClient.post('/user/signup', data);
};

export const login = async (data) => {
  return await defaultClient.post('/user/login', data);
};
