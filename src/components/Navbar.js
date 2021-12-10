import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Navbar bg="danger" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">CS Esportes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}