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
      <ul className="d-flex flex-row mb-0 pb-0 pt-3">
        {navItems.map((navItem) => (
          <li className="mx-2" key={navItem.short}>
            <a
              href={`#${navItem.short}`}
              className={currentNavItem.name === navItem.name && 'navActive'}
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
