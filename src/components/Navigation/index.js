import React, { useEffect } from 'react';

function Navigation(props) {
  const { navItems = [], setCurrentNavItem, currentNavItem } = props;
  useEffect(() => {
    if (currentNavItem === 'home') {
      document.title = 'Sandrine P.';
    } else {
      document.title = currentNavItem.name;
    }
  }, [currentNavItem]);

  return (
    <nav>
      <ul className="flex-row">
        {navItems.map((navItem) => (
          <li
            className={`mx-2 ${
              currentNavItem.name === navItem.name && 'navActive'
            }`}
            key={navItem.short}
          >
            <a
              href={`#${navItem.short}`}
              onClick={() => {
                setCurrentNavItem(navItem);
              }}
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
