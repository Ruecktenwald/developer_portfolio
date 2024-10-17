import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg2 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Ruecktenwald. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/ruecktenwald" target="_blank" rel="noopener noreferrer" className="hover:text-brand1 transition ease-in-out duration-300">
            GitHub
          </a>
          <a href="#contact" className="hover:text-brand1 transition ease-in-out duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
