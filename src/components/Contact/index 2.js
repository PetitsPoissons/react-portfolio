import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <Container className="w-100 contact">
      <Row className="flex-row contact-page mx-5 my-5 px-5 py-5">
        <Col xs={4} className="mx-5 my-5 px-5 py-5">
          <Row>
            <h3 className="w-100">Contact info</h3>
            <address>
              MaNJumind
              <br />
              1840 Hyperion Ave
              <br />
              Los Angeles, CA 90027
            </address>
            <div className="tel-email">
              P:{' '}
              <a href="tel:310.351.2676" className="underline--magical">
                310.351.2676
              </a>
              <br />
              E:{' '}
              <a
                href="mailto:sandrine@manjumind.com"
                className="underline--magical"
              >
                sandrine@manjumind.com
              </a>
            </div>
          </Row>
        </Col>
        <Col xs={8} className="contact-form mx-5 my-5 px-5 py-5">
          <Row>
            <h3 className="w-100">Send a message</h3>
          </Row>
          <Row className="w-100">
            <Form className="w-100" onSubmit={handleSubmit}>
              <Form.Row className="w-100">
                <Form.Group controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={name}
                    onBlur={handleChange}
                    name="name"
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={email}
                    onBlur={handleChange}
                    name="email"
                  />
                </Form.Group>
                <Form.Group controlId="formGridMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    defaultValue={message}
                    onBlur={handleChange}
                    name="message"
                  />
                </Form.Group>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                <Button type="submit">Send message</Button>
              </Form.Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
