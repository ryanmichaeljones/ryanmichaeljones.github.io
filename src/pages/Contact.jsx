import { Col, Container, Form, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"

export const Contact = () => {
    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col>
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}