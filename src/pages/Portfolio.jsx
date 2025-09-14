import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '@/assets/background.png'
import { Footer } from '@/components'
import projects from '@/assets/portfolio-cards.json'
import { NavLink } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { COLORS, BREAKPOINTS } from '@/constants'
import React, { useState, useEffect } from 'react'

export const Portfolio = () => {
    const [visibleItems, setVisibleItems] = useState(0)

    useEffect(() => {
        // Load items progressively with intervals
        if (visibleItems < projects.length) {
            const timer = setTimeout(() => {
                setVisibleItems(prev => prev + 1)
            }, visibleItems === 0 ? 0 : 100) // First item immediately, then 100ms intervals

            return () => clearTimeout(timer)
        }
    }, [visibleItems, projects.length])

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
                        <PortfolioItem 
                            key={item.to || idx} 
                            {...item} 
                            isVisible={idx < visibleItems}
                            animationDelay={idx * 50} // Stagger animations
                        />
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
    footer,
    isVisible = false,
    animationDelay = 0
}) => {
    const { loaded: imgLoaded, handleLoad, error } = useImageLoader()
    const [showContent, setShowContent] = useState(false)
    const imgSrc = imagePath || background

    useEffect(() => {
        if (isVisible) {
            // Trigger animation after component becomes visible
            const timer = setTimeout(() => {
                setShowContent(true)
            }, animationDelay)

            return () => clearTimeout(timer)
        }
    }, [isVisible, animationDelay])

    return (
        <Col
            xs={BREAKPOINTS.XS}
            sm={BREAKPOINTS.SM}
            md={BREAKPOINTS.MD}
            lg={BREAKPOINTS.LG}
            xl={BREAKPOINTS.XL}
            xxl={BREAKPOINTS.XXL}
            className='d-flex align-items-stretch g-3'
            style={{
                visibility: isVisible ? 'visible' : 'hidden',
                opacity: showContent ? 1 : 0,
                // transform: showContent ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out'
            }}
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
                        {!imgLoaded && !error && isVisible && (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: COLORS.CARD_BG,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderTop: '2px solid #fff',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                }} />
                            </div>
                        )}
                        {isVisible && (
                            <Card.Img
                                className='align-self-center'
                                src={imgSrc}
                                alt={title}
                                loading='lazy'
                                onLoad={handleLoad}
                                onError={() => {
                                    // Fallback to background image on error
                                    if (imgSrc !== background) {
                                        handleLoad() // Still mark as loaded to hide spinner
                                    }
                                }}
                                style={{
                                    objectFit: 'cover',
                                    height: '11vh',
                                    width: '100%',
                                    opacity: imgLoaded ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                            />
                        )}
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