import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Import custom CSS for styling
import GitHubIcon from '@mui/icons-material/GitHub';  // Material UI GitHub icon

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">C:/ <span className="nav-name">Ruecktenwald</span></Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>

          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
          />

          {/* GitHub Icon */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
            <GitHubIcon />
          </a>
        </nav>
      </div>

      {/* Horizontal line container */}
      <div className="navbar-line-container">
        <span className="navbar-line"></span>
      </div>
    </header>
  );
};

export default Navbar;
