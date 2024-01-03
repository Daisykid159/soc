const baseUrl = 'http://localhost:3000';
import axios from 'axios';

const options = {
  baseURL: baseUrl,
  timeout: 10000,
};

const AxiosInstance = axios.create(options);


