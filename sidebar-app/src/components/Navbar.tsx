import React from 'react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <button onClick={toggleSidebar} className="focus:outline-none">
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className="bg-white p-2 rounded-lg"><img className='w-40' src="https://www.databrixsoft.com/static/media/DataBrifsoft%20Logo.f3e8b522603001dbb716.png" alt="" /></div>
    </nav>
  );
};

export default Navbar;
