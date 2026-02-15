import { Button, Col, Container, Row } from 'react-bootstrap'
import { ProfileImage } from '@/components/home'
import background from '@/assets/background.webp'
import profile from '@/assets/profile.webp'
import { NavLink } from 'react-router-dom'
import styles from '@/styles/pages.module.scss'

export const Home = () => (
    <div
        className={styles.home}
        style={{
            backgroundImage: `linear-gradient(0deg, rgba(31,29,29,0.95), rgba(31,29,29,0.95)),url(${background})`,
        }}
    >
        <Container className={styles.homeContainer}>
            <Row className={`${styles.heroRow} flex-column-reverse flex-lg-row`}>
                <Col xs={12} lg={8} className={styles.textColumn}>
                    <h1 className={styles.heroTitle}>
                        Hello, I'm Ryan!
                    </h1>
                    <h2 className={styles.homeSubtitle}>
                        Game Developer & Software Engineer.
                    </h2>
                    <p className={styles.homeDescription}>
                        Building engaging experiences and solving complex problems with code.<br />
                        Based in London, UK.
                    </p>
                    <Button
                        as={NavLink}
                        to='/portfolio'
                        size='md'
                        variant='success'
                        className={styles.ctaButton}
                    >
                        View My Work
                    </Button>
                </Col>
                <Col xs={12} lg={4} className={styles.imageColumn}>
                    <ProfileImage src={profile} alt="Ryan Jones" />
                </Col>
            </Row>
        </Container>
    </div>
)