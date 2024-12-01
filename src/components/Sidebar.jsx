import React from 'react';
import Link from 'next/link';

const Sidebar = ({ setActiveTab, activeTab }) => {
  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Farmer', href: '/farmer' },
    { name: 'Collector', href: '/collector' },
  ];

  return (
    <nav className="sidebar">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          onClick={() => setActiveTab(tab.name)}
          className={tab.name === activeTab ? 'active' : ''}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;