import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

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
    <Nav className="flex-row" as="ul">
      {navItems.map((navItem) => (
        <Nav.Item as="li" className="mx-2" key={navItem.short}>
          <Nav.Link
            href={`#${navItem.short}`}
            className={currentNavItem.name === navItem.name && 'navActive'}
            onClick={() => {
              setCurrentNavItem(navItem);
            }}
          >
            {navItem.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Navigation;
