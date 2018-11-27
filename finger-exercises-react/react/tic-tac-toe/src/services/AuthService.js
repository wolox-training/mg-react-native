import api from '../config/api';

export const login = values => api.post('/login', values);
