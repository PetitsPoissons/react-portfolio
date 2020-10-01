import React, { useEffect } from 'react';

function Nav(props) {
  const { navItems = [], setCurrentNavItem, currentNavItem } = props;
  useEffect(() => {
    document.title = currentNavItem.name;
  }, [currentNavItem]);

  return (
    <header>
      <div className="flex-row">
        <h1>
          <a href="/">Sandrine Poissonnet</a>
        </h1>
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
      </div>
    </header>
  );
}

export default Nav;
