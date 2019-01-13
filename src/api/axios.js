import axios from 'axios';
import config from '../../config';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(() => {
  config.headers = {
    'Accept-Language': axiosInstance.lang,
  };
  return config;
}, (error) => { Promise.reject(error); },
);
export const baseURL = process.env.NODE_ENV === 'production' ?
  config.build.apiUrl :
  config.dev.apiUrl;

export {
  axiosInstance,
};
