import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animated } from 'react-animated-css';

function About() {
  return (
    <Jumbotron className="flex-row">
      <Container>
        <Row className="flex-row jumbo-content">
          <Col></Col>
          <Col className="center">
            <div className="greeting">
              <div className="greeting-img">
                <div className="div-langues">
                  <h3 className="langues hello">Hello</h3>
                  <h4 className="langues hola">Hola</h4>
                  <h4 className="langues bonjour">Bonjour</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col className="center">
            <div className="jumbo-title">
              <div className="jumbo-title-1">
                <Animated
                  animationIn="lightSpeedIn"
                  animationInDuration={1000}
                  isVisible={true}
                >
                  <h3 id="webdev">Web Development</h3>
                </Animated>
              </div>
              <div className="jumbo-title-2">
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
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default About;
