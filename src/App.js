import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
        return <Project></Project>;
      case 'Contact':
        return <ContactForm></ContactForm>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  }
  return (
    <Container fluid>
      <Header
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Header>
      <main>{displayComponent(currentNavItem.name)}</main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
