import React from 'react';

function Footer() {
  return (
    <footer className="vw-100 py-3">
      <div className="row d-flex flex-row justify-content-center">
        <div className="github">
          <a
            href="https://github.com/PetitsPoissons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/sandrinepoissonnet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="slack">
          <a
            href="https://stackoverflow.com/users/9760536/sandrine-p?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
