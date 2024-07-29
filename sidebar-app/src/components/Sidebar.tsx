import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-30`}
    >
      <button
        onClick={toggleSidebar}
        className="text-white absolute top-4 right-4 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Sidebar</h2>
        <nav className="flex flex-col mt-4">
          <Link to="/" className="p-2 hover:bg-gray-700 rounded-lg" onClick={toggleSidebar}>Home</Link>
          <Link to="/service" className="p-2 hover:bg-gray-700 rounded-lg" onClick={toggleSidebar}>Service</Link>
          <Link to="/aboutus" className="p-2 hover:bg-gray-700 rounded-lg" onClick={toggleSidebar}>About Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
