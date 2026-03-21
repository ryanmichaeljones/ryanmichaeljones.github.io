import { Col, Container, Row, Image, Badge, Carousel } from 'react-bootstrap'
import { Footer, Section } from '@/components'
import image from '@/assets/background.webp'
import styles from '@/styles/pages.module.scss'

export const PortfolioProject = ({ project }) => {
    const {
        title,
        subtitle,
        period,
        images = [],
        description,
        features = [],
        links = []
    } = project

    const renderImageCarousel = () => {
        if (images.length === 0) {
            return (
                <Image
                    src={image}
                    alt='Project fallback'
                    className={`${styles.portfolioCardImg} ${styles.projectImage}`}
                />
            )
        }

        return (
            <Carousel
                className={styles.carousel}
                controls={images.length > 1}
                indicators={images.length > 1}
            >
                {images.map((img, idx) => (
                    <Carousel.Item key={img.src || idx}>
                        <Image
                            src={img.src || image}
                            alt={img.alt || `${title} screenshot ${idx + 1}`}
                            className={`${styles.portfolioCardImg} ${styles.projectImage}`}
                            loading='lazy'
                            decoding='async'
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }

    return (
        <div className={styles.contentPage}>
            <Container>
                <Row className='pt-4'>
                    <Col xs={12}>
                        <h1>{title}</h1>
                        <h2 className='mb-1'>{subtitle}</h2>
                        <h3>
                            <Badge bg='secondary' aria-label={`Project period: ${period}`}>
                                {period}
                            </Badge>
                        </h3>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={6}>
                        {renderImageCarousel()}
                    </Col>
                    <Col lg={6} className='pt-3 pt-lg-0'>
                        <Section title='Description'>
                            <p>{description}</p>
                        </Section>
                        {features.length > 0 && (
                            <Section title='Features'>
                                <ul>
                                    {features.map((feature, idx) => (
                                        <li key={`${feature}-${idx}`}>{feature}</li>
                                    ))}
                                </ul>
                            </Section>
                        )}
                        {links.length > 0 && (
                            <Section title='Links'>
                                <ul>
                                    {links.map((link) => (
                                        <li key={link.url}>
                                            <a
                                                href={link.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={styles.projectLink}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Section>
                        )}
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}