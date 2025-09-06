import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap'
import { Footer } from '@/components'
import { useContactForm } from '@/hooks/useContactForm'

export const Contact = () => {
    const {
        form,
        submitted,
        validated,
        error,
        loading,
        handleChange,
        handleSubmit
    } = useContactForm()

    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className='pt-4'>
                    <Col>
                        <h1>Contact Me</h1>
                        <p style={{ opacity: 0.85 }}>Feel free to reach out using the form below!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {submitted && (
                            <Alert variant='success' className='mb-4'>
                                Thank you for your message! I will get back to you soon.
                            </Alert>
                        )}
                        {error && (
                            <Alert variant='danger' className='mb-4'>
                                {error}
                            </Alert>
                        )}
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <Form.Group controlId='formGridName'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type='text'
                                            placeholder='Enter name'
                                            name='name'
                                            value={form.name}
                                            onChange={handleChange}
                                            className='bg-dark text-white border-secondary'
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            Please enter your name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId='formGridEmail'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type='email'
                                            placeholder='Enter email'
                                            name='email'
                                            value={form.email}
                                            onChange={handleChange}
                                            className='bg-dark text-white border-secondary'
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            Please enter a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className='mb-3' controlId='formGridSubject'>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Subject'
                                    name='subject'
                                    value={form.subject}
                                    onChange={handleChange}
                                    className='bg-dark text-white border-secondary'
                                />
                                <Form.Control.Feedback type='invalid'>
                                    Please enter a subject.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formGridMessage'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    required
                                    as='textarea'
                                    rows={5}
                                    placeholder='Type your message here...'
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    className='bg-dark text-white border-secondary'
                                />
                                <Form.Control.Feedback type='invalid'>
                                    Please enter your message.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button 
                                variant='primary' 
                                type='submit' 
                                className='mt-2' 
                                disabled={loading} 
                                style={{ borderRadius: '2em' }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Form>
                        <div className='mt-4'>
                            <p style={{ opacity: 0.85 }}>
                                Interested in hiring and want to know more? &nbsp;
                                <a
                                    href='/resume'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    style={{ textDecoration: 'underline', color: '#fff' }}
                                >
                                    View my resume
                                </a>
                                .
                            </p>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}