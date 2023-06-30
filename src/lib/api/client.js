import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = '';

// header
client.defaults.headers.common['Authorization'] = 'Bearer something...';

// intercepter
axios.intercepter.response.use(
  (response) => {
    // success
    return response;
  },
  (error) => {
    // failure
    return Promise.reject(error);
  },
);
