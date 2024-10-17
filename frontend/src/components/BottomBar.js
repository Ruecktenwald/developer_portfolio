import React, { useState } from 'react';
import { Home, MailOutline } from '@mui/icons-material'; // Material UI Icons
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';

const BottomBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Sidebar for Mobile View - Always Visible */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 h-12 bg-bg2 text-white p-3 flex justify-around items-center shadow-md bg-opacity-90 backdrop-blur-md"
      >
        {/* Sidebar Icons */}
        <a href="#top" className="sidebar-icon hover:text-brand1 cursor-pointer transition-all duration-500">
          <Home fontSize="large" />
        </a>
        <a href="#skills" className="sidebar-icon hover:text-brand1 cursor-pointer transition-all duration-500">
          <CodeIcon fontSize="large" />
        </a>
        <a href="#projects" className="sidebar-icon hover:text-brand1 cursor-pointer transition-all duration-500">
          <ComputerIcon fontSize="large" />
        </a>
        <a href="#contact" className="sidebar-icon hover:text-brand1 cursor-pointer transition-all duration-500">
          <MailOutline fontSize="large" />
        </a>
      </div>

      {/* Sidebar Handle for Larger View */}
      {!showSidebar && (
        <div
          className="hidden md:flex fixed bottom-0 left-1/2 transform -translate-x-1/2 h-5 w-7  bg-white bg-opacity-5 text-white p-2 items-center justify-center rounded-t-full shadow-md cursor-pointer transition-transform duration-500 hover:translate-y-2"
          onMouseEnter={() => setShowSidebar(true)}
        >
          <button className="text-white cursor-pointer">≡</button>
        </div>
      )}

      {/* Full Sidebar for Larger View - Hidden by Default */}
      <div
        className={`hidden md:flex fixed bottom-0 left-1/4 right-1/4 h-12 bg-bg2 text-white p-3 justify-around items-center bg-opacity-90 backdrop-blur-md rounded-t-lg shadow-md transition-transform duration-500 ${showSidebar ? 'translate-y-0' : 'translate-y-full'}`}
        onMouseEnter={() => setShowSidebar(true)}
        onMouseLeave={() => setShowSidebar(false)}
      >
        {/* Sidebar Icons */}
        <a href="#top" className="sidebar-icon px-2 hover:text-brand1 cursor-pointer transition-all duration-500">
          <Home fontSize="large" />
        </a>
        <a href="#skills" className="sidebar-icon px2 hover:text-brand1 cursor-pointer transition-all duration-500">
          <CodeIcon fontSize="large" />
        </a>
        <a href="#projects" className="sidebar-icon px-2 hover:text-brand1 cursor-pointer transition-all duration-500">
          <ComputerIcon fontSize="large" />
        </a>
        <a href="#contact" className="sidebar-icon px-2 hover:text-brand1 cursor-pointer transition-all duration-500">
          <MailOutline fontSize="large" />
        </a>
      </div>
    </>
  );
};

export default BottomBar;
