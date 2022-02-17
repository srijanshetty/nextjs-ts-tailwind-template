import Axios from 'axios';

let baseURL = '/api/';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001/api/';
}

export { baseURL };

const api = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
