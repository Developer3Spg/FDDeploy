import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://mezz-back.onrender.com/", // Replace with the actual URL of your backend
  timeout: 5000, // Adjust the timeout as needed,
  headers: {
    'Content-Type': 'application/json', // Set your headers as needed
  },
  withCredentials: true, // Add this line to enable cookie handling
});

export default axiosInstance;


