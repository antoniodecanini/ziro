import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ziro-backend.netlify.app/.netlify/functions',
});

export default api;
