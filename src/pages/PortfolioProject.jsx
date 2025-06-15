import { Col, Container, Row, Image, Badge, Carousel } from "react-bootstrap"
import { Footer } from "@/components/Footer"
import image from "@/assets/background.jpg" // Fallback image

export const PortfolioProject = ({ project }) => (
    <div className="portfolio">
        <Container style={{ color: "white" }}>
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
                        style={{
                            border: "2px solid #fff",
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        {project.images.map((img, idx) => (
                            <Carousel.Item key={idx}>
                                <Image
                                    src={img.src || image}
                                    alt={img.alt}
                                    fluid
                                    style={{
                                        objectFit: "cover",
                                        height: "45vh",
                                    }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col md={6}>
                    <Section title="Description">
                        <p>{project.description}</p>
                    </Section>
                    {project.features.length > 0 && (
                        <Section title="Features">
                            <ul>
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </Section>
                    )}
                    {project.links.length > 0 && (
                        <Section title="Links">
                            <ul>
                                {project.links.map((link) => (
                                    <li key={link.url}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#0d7af6" }}
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

const Section = ({ title, children }) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
)