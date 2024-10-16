import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub'; // Material UI GitHub icon
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for the menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <header className="bg-bg2 bg-opacity-95 text-white p-4 font-mono text-md sticky top-0 z-50">
      <div className="navbar-container flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="logo text-md md:text-lg font-bold">
          <Link to="/" className="text-brand1">
            C:/ <span className="text-brand2">Ruecktenwald</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links hidden md:flex items-center space-x-8 text-sm md:text-md">
          <Link to="/" className="hover:text-brand1 transition">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-brand1 transition">
            Blogs
          </Link>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="search-bar px-4 py-1 rounded-full bg-grey text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand1 transition"
          />

          {/* GitHub Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link text-white hover:text-brand1 transition"
          >
            <GitHubIcon />
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 mt-4 bg-bg2 rounded-lg shadow-md">
          <nav className="nav-links  flex flex-col space-y-4 text-sm items-end">
            <Link to="/" className="hover:text-brand1 transition">
              Home
            </Link>
            <Link to="/blogs" className="hover:text-brand1 transition">
              Blogs
            </Link>

            

            {/* GitHub Icon */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link text-white hover:text-brand1 transition flex items-center"
            >
              <GitHubIcon />
              <span className="ml-2">GitHub</span>
            </a>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className="search-bar px-4 py-1 rounded-full bg-grey text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand1 transition"
            />
          </nav>
        </div>
      )}

      {/* Horizontal line container with tapered ends */}
      <div className="navbar-line-container mt-4">
        <div
          className="navbar-line h-0.5 w-full"
          style={{
            background: "linear-gradient(to right, transparent, #12F7D6, transparent)",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
