import * as React from 'react';
import { Navbar, Nav, Container, Button, ButtonGroup } from 'react-bootstrap';
import styles from '../styles/theme.scss';

const NavMenu = props => {
  return (
    <Navbar fixed="top" expand="lg" bg={props.theme} variant={props.theme}>
      <Container>
        <Navbar.Brand href="#top" id="nav-title">Coffee Brewing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#">Dark Mode</Nav.Link> */}
            <Nav.Link href="#instructions">Instructions</Nav.Link>
            <Nav.Link href="#tips">Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavMenu;