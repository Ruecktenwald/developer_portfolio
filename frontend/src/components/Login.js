import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', formData);
      const { access, refresh } = response.data;

      // Store the tokens in localStorage or state as needed
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      alert('There was an error during login. Please check your username and password.');
    }
  };

  return (
    <section className="bg-bg1 text-white py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand1">Login</h2>
          <p className="text-lg mt-4">Sign in to your account to access more features.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 text-sm font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
