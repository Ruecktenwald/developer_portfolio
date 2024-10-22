import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Optimistically set the submitted state to true
    setIsSubmitted(true);
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', formData);
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('There was an error submitting your message.');
      setIsSubmitted(false); // Revert submission state on failure
    }
  };

  return (
    <section id="contact" className="bg-bg1 text-white py-28 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          {isSubmitted ? (
            <h2 className="text-4xl font-regular text-brand1">Thank you for reaching out!</h2>
          ) : (
            <h2 className="text-6xl font-thin text-brand1">Contact Me</h2>
          )}
          <p className="text-lg mt-4">
            {isSubmitted ? 'I will get back to you as soon as possible.' : 'Feel free to reach out for collaborations, questions, or just to say hi!'}
          </p>
        </div>
        <form 
          onSubmit={handleSubmit} 
          className={`space-y-6 transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 transition ${errors.name ? 'ring-red-500' : 'focus:ring-brand1'}`}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 transition ${errors.email ? 'ring-red-500' : 'focus:ring-brand1'}`}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 transition h-32 ${errors.message ? 'ring-red-500' : 'focus:ring-brand1'}`}
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
