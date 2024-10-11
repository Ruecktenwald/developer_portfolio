import React, { useState } from 'react';
import '../styles/Sidebar.css';  // Sidebar styles
import { GridView, MailOutline } from '@mui/icons-material'; // Material UI Icons
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-icon">
          <GridView fontSize="large" />
        </div>
        <div className="sidebar-icon">
          <PersonOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon">
          <CodeIcon fontSize="large" />
        </div>
        <div className="sidebar-icon">
          <ComputerIcon fontSize="large" />
        </div>
        <div className="sidebar-icon">
          <DriveFileRenameOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon">
          <MailOutline fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
