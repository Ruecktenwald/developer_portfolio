import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Typed from 'typed.js';
import Modal from './Modal';

const HeroSection = () => {
  const typedElement = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const typed = new Typed(typedElement.current, {
      strings: [
        "I'm a Full-Stack Web Developer crafting beautiful and impactful digital experiences. Let's build something amazing together!"
      ],
      typeSpeed: 20,
      backSpeed: 25,
      startDelay: 1800,
      loop: false,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          setShowButton(true);
        }, 500); // Delay for the fade-in effect of the button after typing completes
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optimistically set the submitted state to true
    setIsSubmitted(true);
    setTimeout(() => {
      handleModalClose();
    }, 1000);

    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', formData);
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('There was an error submitting your message.');
      setIsSubmitted(false); // Revert submission state on failure
    }
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center bg-bg2 text-white pt-20 px-6 md:pl-12 lg:pl-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 100,0 100,100" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFD93D', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="max-w-xl text-left">
          <h1 className={`text-4xl font-regular mb-6 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>Hi, I'm Peter Ruecktenwald</h1>
          <p className="text-lg mb-6 font-mono">
            <span ref={typedElement}></span>
          </p>
          <button
            onClick={handleModalOpen}
            className={`bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center transition-opacity duration-1000 ease-in-out ${showButton ? 'opacity-100' : 'opacity-0'}`}
            style={{
              visibility: showButton ? 'visible' : 'hidden',
              opacity: showButton ? 1 : 0,
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal title="Contact Me" onClose={handleModalClose} className="transition-opacity duration-500 ease-in-out">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-2xl text-bg1 font-bold mb-4">Thank you for reaching out!</h3>
              <p className="mt-4">I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-bg1 block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-white text-bg1 outline-none focus:ring-2 focus:ring-bg1 transition"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="text-bg1 block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-white text-bg1 outline-none focus:ring-2 focus:ring-bg1 transition"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="text-bg1 block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded bg-white text-bg1 outline-none focus:ring-2 focus:ring-bg1 transition"
                  rows="4"
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          )}
        </Modal>
      )}
    </section>
  );
};

export default HeroSection;
