import Axios from 'axios';

let baseURL = '/api/v1';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000/api/v1';
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
