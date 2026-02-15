import { Container, Row, Col } from 'react-bootstrap'
import { Footer } from '@/components'
import { NavLink } from 'react-router-dom'
import styles from '@/styles/pages.module.scss'

export const NotFound = () => (
    <div className={styles.notFound}>
        <Container>
            <Row className='pt-4'>
                <Col xs={12}>
                    <h1 className={styles.notFoundHeading}>404 - Page Not Found</h1>
                    <p className='mb-2'>
                        Sorry, the page you are looking for does not exist.<br />
                        Please check the URL or return to the{' '}
                        <NavLink to='/' className={styles.homeLink}>homepage</NavLink>.
                    </p>
                </Col>
            </Row>
            <Footer />
        </Container>
    </div>
)