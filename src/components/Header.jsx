import React from 'react';

const Header = ({ activeTab }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{activeTab}</h1>
        <div className="user-info">
          {/* User information and icons */}
        </div>
      </div>
    </header>
  );
};

export default Header;