import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}api/v1/`,
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (!request.headers) request.headers = {};
    request.headers.authorization = `${
      JSON.parse(localStorage.getItem('userCredentials') as string)?.token
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
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

