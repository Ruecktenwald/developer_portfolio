import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('There was an error submitting your message.');
    }
  };

  return (
    <section id="contact" className="bg-bg1 text-white py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-8xl font-regular text-brand1">Contact Me</h2>
          <p className="text-lg mt-4">Feel free to reach out for collaborations, questions, or just to say hi!</p>
        </div>
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand1">Thank you for reaching out!</h3>
            <p className="mt-4">I will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition"
              />
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
                className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-sm font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition h-32"
              />
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
        )}
      </div>
    </section>
  );
};

export default Contact;
