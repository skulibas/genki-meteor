import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OurGalleryText = () => (
  <Container fluid>
    <Row>
      <Col id="Our-Text">
        <h1 className="text-center display-1"><strong>Our</strong></h1>
      </Col>
    </Row>
    <Row>
      <Col id="Gallery-Text">
        <h1 className="text-center display-1"><strong>Gallery</strong></h1>
      </Col>
    </Row>
  </Container>
);

export default OurGalleryText;
