import React from 'react';
import axios from 'axios';

const SubscribeButton = ({ blogId }) => {
  const handleSubscribe = async () => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.post(`http://127.0.0.1:8000/api/blogs/${blogId}/subscribe/`, {}, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      alert('Subscribed successfully!');
    } catch (error) {
      console.error('Error during subscription:', error);
    }
  };

  return <button onClick={handleSubscribe}>Subscribe</button>;
};

export default SubscribeButton;
