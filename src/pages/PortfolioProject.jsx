import { Col, Container, Row, Image, Badge, Carousel } from "react-bootstrap"
import { Footer } from "../components/Footer"
import image from "../assets/background.jpg" // Replace with actual images

export const PortfolioProject = ({ project }) => (
    <div className='portfolio'>
        <Container style={{ color: 'white' }}>
            <Row className="pt-4">
                <Col xs={12}>
                    <h1>{project.title}</h1>
                    <h2 className="mb-1">{project.subtitle}</h2>
                    <h3>
                        <Badge bg="secondary">{project.period}</Badge>
                    </h3>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Carousel
                        rounded
                        style={{ border: '2px solid #fff', borderRadius: '10px', overflow: 'hidden' }}
                    >
                        {project.images.map((img, idx) => (
                            <Carousel.Item key={idx}>
                                <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                    <Image
                                        // src={img.src}
                                        src={image}
                                        alt={img.alt}
                                        fluid
                                        style={{ borderRadius: 0 }}
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <h2>Description</h2>
                    <p>{project.description}</p>
                    <h2>Features</h2>
                    <ul>
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                    <h2>Links</h2>
                    <ul>
                        {project.links.map(link => (
                            <li key={link.url}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0d7af6" }}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Footer />
        </Container>
    </div>
)