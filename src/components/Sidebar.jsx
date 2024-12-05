import React from 'react';
import Link from 'next/link';

const Sidebar = ({ setActiveTab, activeTab }) => {
  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Farmer', href: '/farmer' },
    { name: 'Collector', href: '/collector' },
    { name: 'Distributor', href: '/distributor' },
    { name: 'Transport', href: '/transport' },
    { name: 'Wholesale Buyers', href: '/wholesale-buyers' },
    { name: 'Corporate Buyers', href: '/corporate-buyers' },
    { name: 'Stock & Restock', href: '/stock-restock' },
    { name: 'Fertilizer', href: '/fertilizer' },
  ];

  return (
    <nav className="sidebar bg-[#347161] w-64 min-h-screen   rounded-tr-2xl flex flex-col justify-between">
      <div className="space-y-2">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center p-3 text-white rounded-l-full transition-all ${
              tab.name === activeTab
                ? 'bg-[#6fbb6f] pl-4 font-semibold'
                : 'hover:bg-[#6fbb6f] pl-3'
            }`}
          >
            <span className="ml-2">{tab.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href="/settings"
          className="flex items-center p-3 text-white rounded-l-full transition-all hover:bg-[#6fbb6f]"
        >
          <span className="ml-2">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
