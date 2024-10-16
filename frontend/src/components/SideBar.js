import React from 'react';
import { GridView, MailOutline } from '@mui/icons-material'; // Material UI Icons
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for Desktop View */}
      <div
        className="hidden md:fixed md:top-[10rem] md:left-2 md:h-[calc(55%-5rem)] md:w-12 bg-bg2 text-white p-6 md:flex md:flex-col md:items-center md:space-y-8 rounded-t-3xl rounded-b-3xl shadow-md"
      >
        {/* Sidebar Icons */}
        <div className="sidebar-icon hover:text-brand1">
          <GridView fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <PersonOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <CodeIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <ComputerIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <DriveFileRenameOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <MailOutline fontSize="large" />
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-bg2 text-white p-4 flex justify-around items-center shadow-md"
      >
        {/* Sidebar Icons */}
        <div className="sidebar-icon hover:text-brand1">
          <GridView fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <PersonOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <CodeIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <ComputerIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <DriveFileRenameOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar-icon hover:text-brand1">
          <MailOutline fontSize="large" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
