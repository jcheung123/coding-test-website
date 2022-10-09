import React from 'react';
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Coding-Tests-101</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link> 
                    <Nav.Link href="testone">JavaScript Test</Nav.Link>
                    <Nav.Link href="testtwo">Python Test</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    );
  }

export default NavBar;