import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/token/logout/', {}, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      localStorage.removeItem('authToken');
      alert('Logout successful!');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
