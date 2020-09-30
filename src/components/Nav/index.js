import React from 'react';

function Nav() {
  return (
    <header>
      <div className="flex-row">
        <h1>
          <a href="/">Sandrine Poissonnet</a>
        </h1>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">About me</a>
            </li>
            <li className="mx-2">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="mx-2">
              <a href="#contact">Contact</a>
            </li>
            <li className="mx-2">
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
