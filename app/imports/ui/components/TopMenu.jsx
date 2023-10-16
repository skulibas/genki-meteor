import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar bg="light" expand="sm" className="sticky-top">
    <Nav className="me-auto">
      <Image src="./images/logo_icontext.png" alt="Logo" width="80%" className="mx-3" />
    </Nav>
    <Nav id="nav-text" className="justify-content-end mx-3">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Menu</Nav.Link>
      <Nav.Link>Locations</Nav.Link>
      <Nav.Link>Shop</Nav.Link>
      <Nav.Link>About</Nav.Link>
      <Nav.Link>Careers</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  </Navbar>
);

export default TopMenu;
