import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const HeroSection = () => (
  <Row className="gx-0" expand="sm">
    <Col>
      <Image src="./images/test.png" alt="hero-section" fluid width="100%" />
    </Col>
  </Row>
);

export default HeroSection;
