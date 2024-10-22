import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { GitHub } from '@mui/icons-material';

const Header = () => {
  const navTypedElement = useRef(null);

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

  return (
    <header className="sticky top-0 left-0 w-full bg-bg1 bg-opacity-80 shadow-md md:px-12 backdrop-blur-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 md:px-0 px-6 ">
        <div className="text-3xl font-bold flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-brand1 text-sm font-mono">C:/ </span>
            <span ref={navTypedElement} className="text-white font-mono font-light text-sm"></span>
          </a>
        </div>
        <div className="flex items-center space-x-8 text-white">
        <Link to="/" className="hover:text-brand1 transition ease-in-out duration-300">Home</Link>
          <Link to="/projects" className="hover:text-brand1 transition ease-in-out duration-300">Projects</Link>
          <Link to="/blog" className="hover:text-brand1 transition ease-in-out duration-300">DevLog</Link>
          <a href="https://github.com/ruecktenwald" target="_blank" rel="noopener noreferrer" className="hover:text-brand1 transition ease-in-out duration-300">
            <GitHub fontSize="medium" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
