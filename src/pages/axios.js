import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://mezzpro.onrender.com/', // Replace with your backend URL

  withCredentials: true, // This is important to allow cookies to be sent with the request
});

export default axiosInstance;
