import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

const token = localStorage.getItem('Token');
if (token) {
  api.setHeader('Authorization', token);
}

export default api;
