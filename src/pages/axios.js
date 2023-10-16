import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mezz-back.onrender.com', // Replace with your backend URL

  withCredentials: true, // This is important to allow cookies to be sent with the request
});

export default axiosInstance;
