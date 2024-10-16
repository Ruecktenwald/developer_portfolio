import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { GitHub } from '@mui/icons-material';

const Header = () => {
  const navTypedElement = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const navTyped = new Typed(navTypedElement.current, {
      strings: ["Ruecktenwald"],
      typeSpeed: 20,
      startDelay: 200,
      showCursor: true,
      cursorChar: '|',
      backSpeed: 0,
      loop: false,
      onComplete: () => {
        setTimeout(() => {
          const cursor = navTypedElement.current.nextSibling;
          if (cursor) {
            cursor.style.display = 'none';
          }
        }, 1000); // Delay of 1000 milliseconds (1 second)
      }
    });

    const cursorElement = document.querySelector('.typed-cursor');
    if (cursorElement) {
      cursorElement.classList.add('text-white', 'text-sm');
    }

    return () => {
      navTyped.destroy(); 
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-bg1 bg-opacity-80 shadow-md backdrop-blur-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        <div className="text-3xl font-bold flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-brand1 text-sm font-mono">C:/ </span>
            <span ref={navTypedElement} className="text-white font-mono font-light text-sm"></span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleNavToggle} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul 
          className={`md:flex space-x-8 text-white ${isNavOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-bg1 md:bg-transparent p-4 md:p-0 transition-all duration-300`} 
          onClick={handleNavClose}
        >
          <li><a href="#about" className="hover:text-brand1 transition">About</a></li>
          <li><a href="#skills" className="hover:text-brand1 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-brand1 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-brand1 transition">Contact</a></li>
          <li className="mt-4 md:mt-0">
            <a href="https://github.com/ruecktenwald" target="_blank" rel="noopener noreferrer" className="hover:text-brand1 transition">
              <GitHub fontSize="medium" />
            </a>
          </li>
        </ul>
      </nav>
      {isNavOpen && <div className="fixed inset-0 z-40" onClick={handleNavClose}></div>}
    </header>
  );
};

export default Header;
