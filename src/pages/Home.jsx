import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import profile from '@/assets/profile.png'
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
        <Container style={{ marginTop: '7vh', marginBottom: '3vh', paddingLeft: '8vw', paddingRight: '8vw' }}>
            <Row className="align-items-center mb-5 flex-column-reverse flex-lg-row text-center text-lg-start">
                <Col xs={12} lg={8}>
                    <h1
                        style={{
                            fontWeight: 700,
                            color: "#0d7af6",
                            fontSize: "clamp(2rem, 6vw, 3.0rem)",
                            lineHeight: 1.1
                        }}
                    >
                        Hello, I'm Ryan!
                    </h1>
                    <h2
                        style={{
                            fontWeight: 400,
                            color: "#fff",
                            opacity: 0.85,
                            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                            lineHeight: 1.2
                        }}
                    >
                        Game Developer & Software Engineer
                    </h2>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
                            color: "#b3b3b3",
                            lineHeight: 1.5,
                            marginBottom: "1.5rem"
                        }}
                    >
                        Building engaging experiences and solving complex problems with code.<br />
                        Based in London, UK.
                    </p>
                    <Button
                        as={NavLink}
                        to="/portfolio"
                        size="md"
                        variant="success"
                        style={{
                            fontWeight: 600,
                            background: "linear-gradient(90deg, #0d7af6 0%,rgb(46, 110, 184) 100%)",
                            border: "none",
                            fontSize: "clamp(1rem, 2vw, 1.15rem)",
                            padding: "0.7em 2.3em",
                            borderRadius: "2em",
                            boxShadow: "0 4px 24px rgba(13, 122, 246, 0.18)",
                            color: "#fff",
                            letterSpacing: "0.03em",
                            transition: "transform 0.15s, box-shadow 0.15s, background 0.15s"
                        }}
                    >
                        View My Work
                    </Button>
                </Col>
                <Col xs={12} lg={4} className="d-flex justify-content-center justify-content-lg-end mb-4 mb-lg-0">
                    <Image
                        src={profile}
                        roundedCircle
                        alt="Ryan Jones"
                        style={{ height: '36vh', width: 'auto', maxWidth: '260px', minHeight: '180px' }}
                    />
                </Col>
            </Row>
        </Container>
    </div>
)