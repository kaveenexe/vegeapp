import React from 'react';
import Image from 'next/image';
import { FaSearch, FaBell } from 'react-icons/fa';
import Logo from '@/Images/logo/Logo.png';
const Header = ({ activeTab }) => {
  return (
    <header className="header flex items-center justify-between w-full bg-white py-2">
      {/* Logo Section */}
      <div className="p-4 bg-white">
        <Image
          src={Logo}
          width={150}
          height={50}
          alt="Logo"
          className='ml-[1.5rem] mr-[3.5rem]'
        />
      </div>

      {/* Active Tab + Actions Section */}
      <div className="flex items-center justify-between flex-1 bg-[#347161] p-4 text-white rounded-tl-xl rounded-bl-xl">
        {/* Active Tab */}
        <h1 className="text-lg font-semibold">{activeTab}</h1>

        {/* Search, Notifications, and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="p-2 bg-white rounded cursor-pointer">
            <FaSearch className="text-black" />
          </div>
          {/* Bell Icon */}
          <div className="p-2 bg-white rounded cursor-pointer">
            <FaBell className="text-black" />
          </div>
          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <Image
              src=""
              width={40}
              height={40}
              alt="User"
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Sahan Medonsa</p>
              <p className="text-xs">Admin</p>
            </div>
            <span className="text-lg">&#9662;</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
