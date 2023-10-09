import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import api from './api'; // Import the api.js file

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProfileData, setUpdatedProfileData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    mobile_no: '',
    bank_name: '',
    branch: '',
    ifsc_code: '',
    account_number: '',
    company_name: '',
    tin: '',
    pan_number: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch user profile data when the component mounts
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.getUserProfile();
        setProfileData(response); // Assuming the response contains user profile data
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle error states here if needed
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Set initial form data when the modal opens
    setUpdatedProfileData(profileData);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send updated profile data to the API
      const response = await api.updateProfile(updatedProfileData);
      // Assuming the response contains updated user profile data
      setProfileData(response);
      setSuccessMessage('Profile updated successfully.');
      // Close the modal after successful update
      handleCloseModal();
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Handle error states here if needed
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage('');
  };
  
  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      minWidth: '300px',
      maxWidth: '80vw', // Set a maximum width for the modal
      maxHeight: '80vh', // Set a maximum height for the modal
      overflowY: 'auto', // Enable vertical scrolling if content exceeds the height
      outline: 'none',
      borderRadius: '8px',
    }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Edit Profile
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="First Name"
          name="first_name"
          value={updatedProfileData.first_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="last_name"
          value={updatedProfileData.last_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={updatedProfileData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={updatedProfileData.address}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile No"
          name="mobile_no"
          value={updatedProfileData.mobile_no}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Bank Details */}
        <TextField
          label="Bank Name"
          name="bank_name"
          value={updatedProfileData.bank_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Branch"
          name="branch"
          value={updatedProfileData.branch}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="IFSC Code"
          name="ifsc_code"
          value={updatedProfileData.ifsc_code}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Account Number"
          name="account_number"
          value={updatedProfileData.account_number}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* KYC */}
        <TextField
          label="Company Name"
          name="company_name"
          value={updatedProfileData.company_name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="TIN"
          name="tin"
          value={updatedProfileData.tin}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="PAN Number"
          name="pan_number"
          value={updatedProfileData.pan_number}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button type="button" variant="outlined" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
            Save
          </Button>
        </Box>
      </form>

      <Snackbar open={Boolean(successMessage)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          {successMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default UpdateModal;
