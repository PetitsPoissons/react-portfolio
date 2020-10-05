import React from 'react';
import { Animated } from 'react-animated-css';

function About() {
  return (
    <section className="container m-0 p-0 justify-content-center">
      <div className="row d-flex flex-wrap vw-100 mx-5 my-5 justify-content-around">
        <div className="col-12 col-sm-1 greeting">
          <div className="greeting-img">
            <div className="div-langues">
              <h3 className="langues hello">Hello</h3>
              <h4 className="langues hola">Hola</h4>
              <h4 className="langues bonjour">Bonjour</h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-11 col-md-9 col-lg-5 hero-title">
          <div className="hero-title-1">
            <Animated
              animationIn="lightSpeedIn"
              animationInDuration={1000}
              isVisible={true}
            >
              <h3 id="webdev">Web Development</h3>
            </Animated>
          </div>
          <div className="hero-title-2">
            <Animated
              animationIn="zoomInDown"
              animationInDuration={2500}
              isVisible={true}
            >
              <h3 id="datanal">Data Analysis</h3>
            </Animated>
            <Animated
              animationIn="zoomInDown"
              animationInDuration={4000}
              isVisible={true}
            >
              <h3 id="viz">
                <span id="and">&amp;</span>
                Visualization
              </h3>
            </Animated>
          </div>
        </div>
      </div>

      <div className="row d-flex flex-wrap vw-100 mx-auto my-5 justify-content-center">
        <div className="px-5 my-5 py-5 bio">
          Freelance data analyst and web developer with strong statistical
          skills, research and teaching experience and a healthy appetite for
          new challenges.
          <br />
          Python, SQL, MERN Stack, D3, Leaflet, Tableau, Flask, SQLAlchemy.
          <br />
          Bilingual French-English, fluent in Spanish.
        </div>
      </div>
    </section>
  );
}

export default About;
