import { Col, Container, Form, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"

export const Contact = () => (
    <div className='portfolio'>
        <Container style={{ color: 'white' }}>
            <Row className="pt-4">
                <Col>
                    <h1>Contact Me</h1>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Footer />
        </Container>
    </div>
)