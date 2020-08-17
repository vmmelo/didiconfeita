import React from 'react'
import {
  Nav, Navbar
} from 'react-bootstrap'
import Logo from 'assets/logo2.jpg'
import { categories } from '../constant';

function Header() {
  return (
    <Navbar id="header" bg="pink" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="Didi Confeita"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="ml-auto">
          {categories.map((key) => <Nav.Link key={`menu_${key}`} href={`#${key}`}>{key}</Nav.Link>)}
          <Nav.Link href="#footer">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
