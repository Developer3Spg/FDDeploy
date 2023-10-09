const API_BASE_URL = 'https://mezz-back.onrender.com'; // Update with your Flask server address

const api = {
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  getUserProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  updateProfile: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  uploadInvoice: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/upload_invoice`, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  },

  submitInvoice: async (invoiceData) => {
    const response = await fetch(`${API_BASE_URL}/submit_invoice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),
    });
    return response.json();
  },

  getApprovedInvoices: async () => {
    const response = await fetch(`${API_BASE_URL}/approved_invoices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  getPendingApprovalInvoices: async () => {
    const response = await fetch(`${API_BASE_URL}/pending_approval_invoices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  deleteInvoice: async (invoiceId) => {
    const response = await fetch(`${API_BASE_URL}/invoices/${invoiceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  sendForApproval: async (invoiceId) => {
    const response = await fetch(`${API_BASE_URL}/invoices/pending_approval_pdfs/${invoiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  cameForApproval: async () => {
    const response = await fetch(`${API_BASE_URL}/came_for_approval`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  approveInvoice: async (invoiceId) => {
    const response = await fetch(`${API_BASE_URL}/approve_invoice/${invoiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },

  validateMintTokens: async (data) => {
    const response = await fetch(`${API_BASE_URL}/validate_mint_tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  
};

export default api;
