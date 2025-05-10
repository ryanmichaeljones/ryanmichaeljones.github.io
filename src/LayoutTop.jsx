import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const LayoutTop = () => {
    const location = useLocation()
    return (
        <Navbar expand='lg' fixed='top' bg='dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand>ryanmichaeljones.co.uk</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className='me-auto' activeKey={location.pathname} style={{ fontFamily: 'Poppins-Regular' }}>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}