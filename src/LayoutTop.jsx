import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const LayoutTop = () => {
    return (
        <Navbar expand='lg' sticky='top' data-bs-theme='dark' style={{ backgroundColor: 'rgb(15, 14, 14)' }}>
            <Container>
                <Navbar.Brand to='/' as={NavLink}><strong style={{ color: '#0d7af6' }}>{'</>'}</strong> ryanmjones.co.uk</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ms-auto'>
                        <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                        <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                        <Nav.Link to='/portfolio' as={NavLink}>Portfolio</Nav.Link>
                        <Nav.Link to='/contact' as={NavLink}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}