import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar  bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">EndGame Todo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/' >Todo</Nav.Link>
                            <Nav.Link as={Link} to='/completed' >Completed</Nav.Link>
                            <Nav.Link as={Link} to='/calendar' >Calendar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;