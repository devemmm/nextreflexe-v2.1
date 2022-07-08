import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // headers: {
  //   'Content-Security-Policy': 'upgrade-insecure-requests',
  // },
});

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('userCredentials'))?.token
    }`;
    return request;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (request) => request,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('userCredentials');
      window.location.href = '/Signin';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

