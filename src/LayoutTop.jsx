import { Nav, Navbar, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const LayoutTop = () => {
    const location = useLocation()
    return (
        <Navbar expand='lg' sticky='top' data-bs-theme='dark' style={{backgroundColor: 'rgb(15, 14, 14)'}}>
            <Container>
                <Navbar.Brand href='/'><strong style={{ color: '#0d7af6' }}>{'</>'}</strong> ryanmjones.co.uk</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ms-auto' activeKey={location.pathname} >
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