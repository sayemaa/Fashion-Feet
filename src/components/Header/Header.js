import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Fashion Feet</Navbar.Brand>
                    <Nav className="me-6">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Shop">Shop</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;