import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, GeoAltFill, Telephone, Envelope, Globe } from 'react-bootstrap-icons';

const BottomMenu = () => (
  <footer>
    <Container className="gx-0">
      <Row className="gx-0">
        <Col>
          <p className="fs-5 mt-3">FIND US ON SOCIAL MEDIA</p>
          <div id="socials" className="m-3">
            <Nav.Link className="p-1"><Instagram className="mx-2" />Instagram</Nav.Link>
            <Nav.Link className="p-1"><Facebook className="mx-2" />Facebook</Nav.Link>
            <Nav.Link className="p-1"><Twitter className="mx-2" />Twitter</Nav.Link>
          </div>
        </Col>
        <Col>
          <p className="fs-5 mt-3">CORPORATE INFO</p>
          <div id="socials" className="m-3">
            <Nav.Link className="p-1"><GeoAltFill className="mx-2" />677 Ala Moana Blvd #602, Honolulu, HI 96813</Nav.Link>
            <Nav.Link className="p-1"><Telephone className="mx-2" />(808) 523-3315</Nav.Link>
            <Nav.Link className="p-1"><Envelope className="mx-2" />info@genkisushiusa.com</Nav.Link>
            <Nav.Link className="p-1"><Globe className="mx-2" />genkisushiusa.com</Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default BottomMenu;
