import api from '../config/api';

export const login = values => api.post('/login', values);

const token = 'Token';

export const setToken = response => {
  api.setHeader('Authorization', response.data.token);
  localStorage.setItem(token, response.data.token);
};

export const getToken = () => {
  localStorage.getItem(token);
};
