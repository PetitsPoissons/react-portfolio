import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <Container className="w-100 resume">
      <section id="resume" className="my-5">
        <div className="section-title my-5">
          <h2>Resume</h2>
        </div>
        <div class="section-content">
          <p>
            Click{' '}
            <a href={resume} target="_blank" rel="noopener noreferrer">
              here
            </a>{' '}
            to view my resume.
          </p>
        </div>
      </section>
      <Row>
        <Col md={4}>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
