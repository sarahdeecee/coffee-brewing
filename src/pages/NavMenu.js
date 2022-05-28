import * as React from 'react';
import { Navbar, Nav, Container, Button, ButtonGroup } from 'react-bootstrap';
import styles from '../styles/theme.scss';

const NavMenu = props => {
  const {theme, setTheme, size, setSize} = props;
  const oppositeTheme = theme === 'light' ? 'dark' : 'light';
  const buttonVariant = `outline-${oppositeTheme}`;

  const handleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');
  const upsizeFont = () => setSize(size + 1);
  const downsizeFont = () => setSize(size - 1);
  const resetFont = () => setSize(4);

  return (
    <Navbar fixed="top" expand="sm" bg={theme} variant={theme}>
      <Navbar.Brand href="#top" id="nav-title">Coffee Brewing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" onClick={handleTheme}>
            <Button size="sm" variant={buttonVariant}>{theme === 'light' ? 'Dark' : 'Light'} Mode</Button>
          </Nav.Link>
          <Nav.Link href="#">
            <ButtonGroup aria-label="Adjust font size" size="sm">
              <Button variant={buttonVariant} onClick={downsizeFont} disabled={size === 1}>-</Button>
              <Button variant={buttonVariant} onClick={resetFont}>Font Size</Button>
              <Button variant={buttonVariant} onClick={upsizeFont} disabled={size === 7}>+</Button>
            </ButtonGroup>
          </Nav.Link>
          <Nav.Link href="#timer">
            <Button size="sm" variant={buttonVariant}>Timer</Button>
          </Nav.Link>
          <Nav.Link href="#instructions">
            <Button size="sm" variant={buttonVariant}>Instructions</Button>
          </Nav.Link>
          <Nav.Link href="#tips">
            <Button size="sm" variant={buttonVariant}>Tips</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavMenu;