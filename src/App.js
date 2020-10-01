import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import components
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
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
  const [currentNavItem, setCurrentNavItem] = useState('home');

  function displayComponent(navName) {
    switch (navName) {
      case 'Portfolio':
        return <Project></Project>;
      case 'Contact':
        return <ContactForm></ContactForm>;
      default:
        return <About></About>;
    }
  }
  return (
    <div className="App">
      <Header
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Header>
      <main>{displayComponent(currentNavItem.name)}</main>
    </div>
  );
}

export default App;
