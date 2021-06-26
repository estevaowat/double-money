import axios from 'axios';

const api = axios.create({
   baseURL: 'https://www.alphavantage.co',
   headers: { 'User-Agent': 'request' },
});

export default api;
