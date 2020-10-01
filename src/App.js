import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import components
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [navItems] = useState([
    {
      name: 'About me',
      short: 'about',
    },
    {
      name: 'Portfolio',
      short: 'portfolio',
    },
    {
      name: 'Contact',
      short: 'contact',
    },
    {
      name: 'Resume',
      short: 'resume',
    },
  ]);
  const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

  function displayComponent(navName) {
    switch (navName) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <ContactForm></ContactForm>;
      default:
        return <About></About>;
    }
  }
  return (
    <div className="App">
      <Nav
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Nav>
      <main>{displayComponent(currentNavItem.name)}</main>
    </div>
  );
}

export default App;
