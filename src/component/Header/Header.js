import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Link className="py-2 h2 text-decoration-none text-light" to="/">TechWorld</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="text-decoration-none me-4 h5 nav-link " to="/">Home</Link>
                            <Link className="text-decoration-none me-4 h5 nav-link " to="/courses">Service</Link>
                            <Link className="text-decoration-none me-4 h5 nav-link " to="/instructor">Our Instructor</Link>
                            <Link className="text-decoration-none me-4 h5 nav-link " to="/about">About Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;