import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '@/assets/background.png' // Fallback image
import { Footer } from '@/components/Footer'
import projects from '@/assets/portfolio-cards.json'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const CARD_BG = 'rgba(255,255,255,0.07)'

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col>
                        <h1 className="mb-0">My Projects</h1>
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

const PortfolioItem = ({
    to,
    header,
    imagePath,
    title,
    text,
    footer
}) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const imgSrc = imagePath ? imagePath : background;

    return (
        <Col
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={3}
            xxl={3}
            className="d-flex align-items-stretch g-3"
        >
            <NavLink to={to} style={{ textDecoration: 'none', width: '100%' }}>
                <Card
                    className="h-100 shadow-sm portfolio-card"
                    style={{
                        backgroundColor: CARD_BG,
                        color: 'white',
                        transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
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
                        background: '#222', // fallback background
                        position: 'relative'
                    }}>
                        {!imgLoaded && (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'rgba(255,255,255,0.07)',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1
                            }} />
                        )}
                        <Card.Img
                            className="align-self-center"
                            src={imgSrc}
                            alt={title}
                            loading="lazy"
                            onLoad={() => setImgLoaded(true)}
                            style={{
                                objectFit: 'cover',
                                height: '11vh',
                                width: '100%',
                                opacity: imgLoaded ? 1 : 0,
                                transition: 'opacity 0.4s'
                            }}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 600, fontSize: '1.15em' }}>{title}</Card.Title>
                        <Card.Text as="div" style={{ fontSize: '1em', opacity: 0.92, minHeight: 48 }}>
                            {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer style={{
                        background: 'transparent',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        fontSize: '0.95em',
                        opacity: 0.8
                    }}>
                        {footer}
                    </Card.Footer>
                </Card>
            </NavLink>
        </Col>
    );
};