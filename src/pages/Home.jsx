import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import profile from '../assets/home-profile.jpg'
import background from '../assets/background.jpg'

export const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `linear-gradient(0deg, rgba(31, 29, 29, 0.95), rgba(31, 29, 29, 0.95)),url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container style={{ color: 'white' }}>
                <Row className="align-middle d-flex" style={{ paddingTop: '30vh' }}>
                    <Col xs={10}>
                        <h1 style={{ color: '#0d7af6' }}>Hey! I am Ryan Jones</h1>
                        <h1>Game Developer / Software Engineer</h1>
                        <h2>London, UK</h2>
                        <Button size='lg' variant="outline-light" href="/portfolio" style={{ marginTop: '10px' }}>My Portfolio</Button>
                    </Col>
                    <Col xs={2} className="align-self-center d-flex justify-content-end">
                        <Image height={300} src={profile} roundedCircle style={{ border: '4px solid rgba(255,255,255,0.2)', marginTop: '-30px' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}