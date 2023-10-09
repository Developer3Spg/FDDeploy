import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Snackbar, Link, CircularProgress } from '@mui/material';
import api from './api';

const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await api.login(formData); // Use the login function from api.js

        if (response.success) {
          console.log('Login successful:', response.message); // You can handle the success message here
          setShowErrorMessage(false);
          handleLogin();
        } else {
          console.log('Login failed:', response.error); // You can handle the error message here
          setShowErrorMessage(true);
        }
      } catch (error) {
        console.error('Error during login:', error);
        setShowErrorMessage(true); // Handle general error cases
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseErrorMessage = () => {
    setShowErrorMessage(false);
  };

  return (
    <Container maxWidth="sm">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          Don't have an account?{' '}
          <Link href="/register" variant="body2">
            Register here
          </Link>
        </Grid>
      </form>

      <Snackbar
        open={showErrorMessage}
        autoHideDuration={3000}
        onClose={handleCloseErrorMessage}
        message="Invalid username or password"
        style={{ color: 'red' }}
      />
    </Container>
  );
};

export default LoginForm;
