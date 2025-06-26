import { Container, Row, Col } from 'react-bootstrap'
import { Footer } from '@/components/Footer'
import { NavLink } from 'react-router-dom'

export const NotFound = () => (
    <div className='about'>
        <Container style={{ color: 'white' }}>
            <Row className='pt-4'>
                <Col xs={12}>
                    <h1>404 - Page Not Found</h1>
                    <p className='mb-2'>
                        Sorry, the page you are looking for does not exist.<br />
                        Please check the URL or return to the <NavLink to='/'>homepage</NavLink>.
                    </p>
                </Col>
            </Row>
            <Footer />
        </Container>
    </div>
)