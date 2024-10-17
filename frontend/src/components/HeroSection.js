import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Modal from './Modal';
import { GetApp } from '@mui/icons-material';

const HeroSection = () => {
  const typedElement = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        // Show the button after the typing is complete
        setShowButton(true);
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
  };

  return (
    <section id="top" className="min-h-screen flex items-center justify-center bg-bg2 text-white pt-20 px-6 md:pl-12 lg:pl-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-xl text-left">
          <h1 className={`text-4xl font-regular mb-6 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>Hi, I'm Peter Ruecktenwald</h1>
          <p className="text-lg mb-6 font-mono">
            <span ref={typedElement}></span>
          </p>
          <button onClick={handleModalOpen} className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center">Let's Talk</button>
        </div>
      </div>

      {isModalOpen && (
        <Modal title="Contact Me" onClose={handleModalClose}>
          <h3 className="text-2xl text-bg1 font-bold mb-4"></h3>
          <form>
            <div className="mb-4">
              <label className="text-bg1  block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="text-bg1 block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="text-bg1 block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full px-3 py-2 border rounded" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="text-bg1 bg-brand1 hover:bg-brand2 text-bg1 font-bold py-2 px-4 rounded">Send Message</button>
          </form>
        </Modal>
      )}
    </section>
  );
};

export default HeroSection;
