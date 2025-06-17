import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import profile from '@/assets/home-profile.jpg'
import background from '@/assets/background.jpg'
import { NavLink } from 'react-router-dom'

export const Home = () => (
    <div
        className="home"
        style={{
            backgroundImage: `linear-gradient(0deg, rgba(31,29,29,0.95), rgba(31,29,29,0.95)),url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <Container style={{ paddingTop: '7vh', paddingBottom: '3vh' }}>
            <Row className="align-items-center mb-5 flex-column-reverse flex-lg-row text-center text-lg-start">
                <Col xs={12} lg={8}>
                    <h1 style={{ fontWeight: 700, fontSize: "3rem", color: "#0d7af6" }}>
                        Hello, I'm Ryan!
                    </h1>
                    <h2 style={{ fontWeight: 400, fontSize: "1.5rem", color: "#fff", opacity: 0.85 }}>
                        Game Developer & Software Engineer
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "#b3b3b3" }}>
                        Building engaging experiences and solving complex problems with code.<br />
                        Based in London, UK.
                    </p>
                    <Button
                        as={NavLink}
                        to="/portfolio"
                        size="md"
                        variant="success"
                        style={{ fontWeight: 600, background: "#0d7af6", border: "none" }}
                    >
                        View My Work
                    </Button>
                </Col>
                <Col xs={12} lg={4} className="d-flex justify-content-center justify-content-lg-end">
                    <Image
                        src={profile}
                        roundedCircle
                        height={280}
                    />
                </Col>
            </Row>
        </Container>
    </div>
)