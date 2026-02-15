import { Card, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { BREAKPOINTS } from '@/constants'
import background from '@/assets/background.png'
import React, { useState, useEffect } from 'react'
import styles from '@/styles/components.module.scss'

export const PortfolioItem = React.memo(({
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
            className={`d-flex align-items-stretch g-3 ${styles.portfolioItem} ${showContent ? styles.visible : ''}`}
        >
            <NavLink to={to} className={styles.cardLink}>
                <Card className={`h-100 shadow-sm ${styles.card}`} data-bs-theme="dark" style={{ backgroundColor: '#1a1f2e', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                    <Card.Header className={styles.cardHeader}>
                        {header}
                    </Card.Header>
                    <div className={styles.cardImageContainer}>
                        {!imgLoaded && !error && isVisible && (
                            <div className={styles.cardLoadingSpinner}>
                                <div className={styles.cardSpinner} />
                            </div>
                        )}
                        {isVisible && (
                            <Card.Img
                                className={`align-self-center ${styles.cardImage} ${imgLoaded ? styles.loaded : styles.loading}`}
                                src={imgSrc}
                                alt={title}
                                loading='lazy'
                                decoding='async'
                                onLoad={handleLoad}
                                onError={() => {
                                    // Fallback to background image on error
                                    if (imgSrc !== background) {
                                        handleLoad() // Still mark as loaded to hide spinner
                                    }
                                }}
                            />
                        )}
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                            {title}
                        </Card.Title>
                        <Card.Text as='div' className={styles.cardText}>
                            {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={styles.cardFooter}>
                        {footer}
                    </Card.Footer>
                </Card>
            </NavLink>
        </Col>
    )
})

PortfolioItem.displayName = 'PortfolioItem'
