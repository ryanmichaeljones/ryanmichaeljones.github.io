import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container className='py-5' style={{ color: 'white', minHeight: '50vh' }}>
                    <Row className='justify-content-center'>
                        <Col md={8} lg={6}>
                            <Alert variant='danger'>
                                <Alert.Heading>Something went wrong!</Alert.Heading>
                                <p>
                                    We're sorry, but something unexpected happened. 
                                    Please try refreshing the page or go back to the homepage.
                                </p>
                                <hr />
                                <div className='d-flex justify-content-end'>
                                    <Button 
                                        variant='outline-danger'
                                        onClick={() => window.location.href = '/'}
                                    >
                                        Go to Homepage
                                    </Button>
                                </div>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return this.props.children
    }
}
