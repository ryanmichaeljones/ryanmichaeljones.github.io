import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '@/assets/background.png'
import { Footer } from '@/components/Footer'
import projects from '@/assets/portfolio-cards.json'
import { NavLink } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { COLORS, BREAKPOINTS } from '@/constants'
import React from 'react'

export const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className='pt-4'>
                    <Col>
                        <h1 className='mb-0'>My Projects</h1>
                    </Col>
                </Row>
                <Row className='mt-n2'>
                    {projects.map((item, idx) => (
                        <PortfolioItem key={item.to || idx} {...item} />
                    ))}
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

const PortfolioItem = React.memo(({
    to,
    header,
    imagePath,
    title,
    text,
    footer
}) => {
    const { loaded: imgLoaded, handleLoad } = useImageLoader()
    const imgSrc = imagePath || background

    return (
        <Col
            xs={BREAKPOINTS.XS}
            sm={BREAKPOINTS.SM}
            md={BREAKPOINTS.MD}
            lg={BREAKPOINTS.LG}
            xl={BREAKPOINTS.XL}
            xxl={BREAKPOINTS.XXL}
            className='d-flex align-items-stretch g-3'
        >
            <NavLink to={to} style={{ textDecoration: 'none', width: '100%' }}>
                <Card
                    className='h-100 shadow-sm portfolio-card'
                    style={{
                        backgroundColor: COLORS.CARD_BG,
                        color: 'white',
                    }}
                >
                    <Card.Header style={{
                        background: 'transparent',
                        borderBottom: 0,
                        fontWeight: 600,
                        fontSize: '1.1em',
                        letterSpacing: '0.01em'
                    }}>
                        {header}
                    </Card.Header>
                    <div style={{
                        height: '11vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#222',
                        position: 'relative'
                    }}>
                        {!imgLoaded && (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: COLORS.CARD_BG,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1
                            }} />
                        )}
                        <Card.Img
                            className='align-self-center'
                            src={imgSrc}
                            alt={title}
                            loading='lazy'
                            onLoad={handleLoad}
                            style={{
                                objectFit: 'cover',
                                height: '11vh',
                                width: '100%',
                                opacity: imgLoaded ? 1 : 0
                            }}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 600, fontSize: '1.15em' }}>
                            {title}
                        </Card.Title>
                        <Card.Text as='div' style={{ fontSize: '1em', opacity: 0.92, minHeight: 48 }}>
                            {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{
                        background: 'transparent',
                        borderTop: `1px solid ${COLORS.CARD_BG}`,
                        fontSize: '0.95em',
                        opacity: 0.8
                    }}>
                        {footer}
                    </Card.Footer>
                </Card>
            </NavLink>
        </Col>
    )
})

PortfolioItem.displayName = 'PortfolioItem'