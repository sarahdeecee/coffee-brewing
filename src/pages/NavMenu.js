import * as React from 'react';
import { Navbar, Nav, Container, Button, ButtonGroup } from 'react-bootstrap';
import styles from '../styles/theme.scss';

const NavMenu = props => {
  const {theme, setTheme} = props;
  const handleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <Navbar fixed="top" expand="lg" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="#top" id="nav-title">Coffee Brewing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={handleTheme}>{theme === 'light' ? 'Dark' : 'Light'} Mode</Nav.Link>
            <Nav.Link href="#instructions">Instructions</Nav.Link>
            <Nav.Link href="#tips">Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavMenu;