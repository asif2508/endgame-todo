import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">EndGame Todos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to='/' >Todo</Nav.Link>
                            <Nav.Link as={CustomLink} to='/completed' >Completed</Nav.Link>
                            <Nav.Link as={CustomLink} to='/calendar' >Calendar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;