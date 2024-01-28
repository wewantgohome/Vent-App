import { client } from '@lib/api/client';

export const getEventArticles = async () => {
  const res = await client.post(`/event/user`);
  return res.data.allParticipations;
};

export const getEvents = async () => {
  const res = await client.post(`/event/company`);
  return res.data.companyEven;
};

export const createEvent = async (data) => {
  return await client.post(`/event`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
