// Filename - pages/about.js

import React from "react";
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
	return (
		<Container>
      <h1>About us</h1>
      <hr />
      <Container className="background w-100 px-4 py-3 rounded mb-3">
        <Row className="justify-content-evenly">
          <Col xs={12} className="text-center mb-3 bg-light rounded">
            <img src="/logo192.png" alt="Logo"  height="200" />
          </Col>
          <Col xs={12} md={6} className="mb-3 text-light">
            <h2>Who are we?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad porro dolorem eveniet mollitia ipsum minus ex corporis ut. Nihil voluptatem exercitationem quaerat assumenda! Provident neque, minima quod voluptatum tenetur ducimus!
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-3 text-light">
            <h2>Blah Blah</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit deleniti perferendis impedit rerum possimus dolorum eligendi similique, vero odit sed consectetur officiis iusto nisi culpa ex delectus illo sequi?
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
	);
};

export default About;
