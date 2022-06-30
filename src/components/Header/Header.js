import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">EndGame Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Todo</Nav.Link>
                            <Nav.Link href="#link">Completed</Nav.Link>
                            <Nav.Link href="#link">Calandar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;