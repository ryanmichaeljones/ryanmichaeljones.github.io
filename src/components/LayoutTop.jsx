import { useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS, COLORS } from '@/constants'

export const LayoutTop = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar
            expand='lg'
            sticky='top'
            data-bs-theme='dark'
            style={{ backgroundColor: 'rgb(15, 14, 14)' }}
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <strong style={{ color: COLORS.PRIMARY }}>{'</>'}</strong> ryanmjones.co.uk
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ms-auto'>
                        {NAV_LINKS.map(({ to, label }) => (
                            <Nav.Link
                                as={NavLink}
                                to={to}
                                key={to}
                                end={to === '/'}
                                onClick={() => setExpanded(false)}
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