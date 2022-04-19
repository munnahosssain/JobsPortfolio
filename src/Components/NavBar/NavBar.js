import './NavBar.css'
import logo from '../images/LOGO.png'
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Nav.Link to="/" href="#home">
                        <Image src={logo} className="logo" />
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link to="/" href="#home" className="me-5 menu-bar">Home</Nav.Link>
                            <Nav.Link to="/about" href="#about" className="me-5 menu-bar">About</Nav.Link>
                            <Nav.Link to="/skill" href="#skill" className="me-5 menu-bar">Skills</Nav.Link>
                            <Nav.Link to="/services" href="#services" className="me-5 menu-bar">services</Nav.Link>
                            <Nav.Link to="/projects" href="#projects" className="me-5 menu-bar">Projects</Nav.Link>
                            <Nav.Link to="/contacts" href="#contact" className="me-5 menu-bar">contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;