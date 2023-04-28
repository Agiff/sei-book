import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sei-Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "nav-link" : isActive ? "nav-link" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/ebook"
              className={({ isActive, isPending }) =>
                isPending ? "nav-link" : isActive ? "nav-link" : "nav-link"
              }
            >
              E-Book
            </NavLink>
            <NavLink
              onClick={onLogout}
              className={({ isActive, isPending }) =>
                isPending ? "nav-link" : isActive ? "nav-link" : "nav-link"
              }
            >
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
