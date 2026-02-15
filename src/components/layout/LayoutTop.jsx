import { useState, useCallback } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, COLORS } from '@/constants'

export const LayoutTop = () => {
    const [expanded, setExpanded] = useState(false)

    const handleToggle = useCallback((value) => {
        setExpanded(value)
    }, [])

    const handleNavLinkClick = useCallback(() => {
        setExpanded(false)
    }, [])

    return (
        <Navbar
            expand='lg'
            data-bs-theme='dark'
            style={{ backgroundColor: 'rgb(15, 14, 14)', flexShrink: 0 }}
            expanded={expanded}
            onToggle={handleToggle}
            role='navigation'
            aria-label='Main navigation'
        >
            <Container>
                <Navbar.Brand as={NavLink} to='/' aria-label='Home - ryanmjones.co.uk'>
                    <strong style={{ color: COLORS.PRIMARY }}>{'</>'}</strong> ryanmjones.co.uk
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' aria-label='Toggle navigation menu' />
                <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        {NAV_LINKS.map(({ to, label }) => (
                            <Nav.Link
                                as={NavLink}
                                to={to}
                                key={to}
                                end={to === '/'}
                                onClick={handleNavLinkClick}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}