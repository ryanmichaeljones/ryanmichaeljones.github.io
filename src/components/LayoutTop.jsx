import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' }
]

export const LayoutTop = () => (
    <Navbar expand="lg" sticky="top" data-bs-theme="dark" style={{ backgroundColor: 'rgb(15, 14, 14)' }}>
        <Container>
            <Navbar.Brand as={NavLink} to="/">
                <strong style={{ color: '#0d7af6' }}>{'</>'}</strong> ryanmjones.co.uk
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ms-auto">
                    {NAV_LINKS.map(({ to, label }) => (
                        <Nav.Link as={NavLink} to={to} key={to} end={to === '/'}>
                            {label}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)