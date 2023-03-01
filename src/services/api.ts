import axios from 'types-axios';

export const api = axios.create({
  baseURL: ' https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 10000,
});

export default api;
