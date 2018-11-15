import { create } from 'apisauce';

console.log(process.env.REACT_APP_API_BASE_URL);

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000
});

export default api;
