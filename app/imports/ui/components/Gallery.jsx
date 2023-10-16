import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

const Gallery = () => (
  <Container fluid className="gx-0">
    <Row className="gx-0">
      <Col className="m-3"><Image src="./images/bento2.jpg" alt="bento-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/2.jpg" alt="train-sushi-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/bento.jpg" alt="man-eating-sushi-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/4.jpg" alt="sushi-on-a-chopstick-image" width="100%" /></Col>
    </Row>
    <Row className="gx-0">
      <Col className="m-3"><Image src="./images/5.jpg" alt="person-showing-plates-of-sushi-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/6.jpg" alt="fried-crab?-sushi-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/7.jpg" alt="corn-ramen-image" width="100%" /></Col>
      <Col className="m-3"><Image src="./images/1.jpg" alt="man-showing-udon-on-chopstick-image" width="100%" /></Col>
    </Row>
  </Container>
);

export default Gallery;
