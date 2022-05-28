import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavMenu = props => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#top">Coffee Brewing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Dark Mode</Nav.Link>
            <Nav.Link href="#instructions">Instructions</Nav.Link>
            <Nav.Link href="#tips">Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavMenu;