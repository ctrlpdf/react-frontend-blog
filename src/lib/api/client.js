import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = '';

// header
client.defaults.headers.common['Authorization'] = 'Bearer something...';

client.interceptors.response.use(
  (response) => {
    // success
    return response;
  },
  (error) => {
    // failure
    return Promise.reject(error);
  },
);

export default client;
