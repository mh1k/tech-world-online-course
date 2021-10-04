import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className="pt-4 pb-4" bg="dark" variant="dark">
                <Container>
                    <Link className="h3 text-decoration-none text-light" to="/">TechWorld</Link>
                    <Nav className="ms-auto">
                        <Link className="text-decoration-none me-3 h5 text-light" to="/">Home</Link>
                        <Link className="text-decoration-none me-3 h5 text-light" to="/courses">Service</Link>
                        <Link className="text-decoration-none me-3 h5 text-light" to="/instructor">Our Instructor</Link>
                        <Link className="text-decoration-none me-3 h5 text-light" to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;