import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const { navItems = [], setCurrentNavItem, currentNavItem } = props;

  return (
    <header className="vw-100 m-0 p-0">
      <div className="flex-row">
        <h1>
          <a href="/">Sandrine Poissonnet</a>
        </h1>
        <Navigation
          navItems={navItems}
          setCurrentNavItem={setCurrentNavItem}
          currentNavItem={currentNavItem}
        ></Navigation>
      </div>
    </header>
  );
}

export default Header;
