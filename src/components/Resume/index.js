import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Media from 'react-bootstrap/Media';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <section className="container px-5 py-3 my-5 w-100 resume-page">
      <div className="row my-3 d-block w-100">
        <h2>Resume</h2>
        <p>
          Click{' '}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          to view my resume.
        </p>
      </div>
      <div className="row my-5 d-block w-100">
        <h2>Proficiencies</h2>
      </div>
      <div className="row d-flex flex-row mx-5 justify-content-center">
        <div className="col-6 mx-auto">
          <h4>FRONT-END:</h4>
          <div class="media">
            <img
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="html icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">HTML</h5>
            </div>
          </div>
          <div class="media">
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">CSS</h5>
            </div>
          </div>
          <div class="media my-1">
            <img
              src="https://img.icons8.com/color/48/000000/javascript-logo-1.png"
              alt="javascript icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">Javascript</h5>
            </div>
          </div>
          <div class="media my-1">
            <img
              class="jquery"
              src="https://img.icons8.com/ios-filled/45/000000/jquery.png"
              alt="jQuery icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">jQuery</h5>
            </div>
          </div>
          <div class="media my-1">
            <img
              src="https://img.icons8.com/officel/50/000000/react.png"
              alt="react icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">React</h5>
            </div>
          </div>
          <div class="media my-1">
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="bootstrap icon"
            />
            <div class="media-body my-1">
              <h5 class="ml-3 pt-3">Bootstrap</h5>
            </div>
          </div>
        </div>
        <div className="col-6 mx-auto">
          <h4>BACK-END:</h4>
          <div class="media my-2">
            <img
              src="https://img.icons8.com/color/68/000000/nodejs.png"
              alt="node icon"
              class="node"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">Node</h5>
            </div>
          </div>
          <div class="media my-2">
            <img
              src="https://img.icons8.com/windows/62/000000/node-js.png"
              alt="express icon"
              class="express"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">Express</h5>
            </div>
          </div>
          <div class="media my-2">
            <img
              src="https://img.icons8.com/ios/50/000000/mysql-logo.png"
              alt="mysql icon"
              class="mysql"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">MySQL</h5>
            </div>
          </div>
          <div class="media my-2">
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongodb icon"
            />
            <div class="media-body">
              <h5 class="ml-3 pt-3">MongoDB</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
