// axiosConfig.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://mezz-back.onrender.com/", // Replace with the actual URL of your backend

});

export default axiosInstance;

