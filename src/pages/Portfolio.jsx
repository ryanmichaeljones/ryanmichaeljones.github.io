import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '../assets/background.jpg'
import { Footer } from '../components/Footer'
import projects from '../assets/portfolio-projects.json'
import { NavLink } from 'react-router-dom'
import { groupBy } from '../utils/GroupBy'

export const Portfolio = () => {
    const projectRowData = groupBy(projects, (_, i) => Math.floor(i / 4))

    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col>
                        <h1>My Projects</h1>
                    </Col>
                </Row>
                {projectRowData?.map((g, i) => (
                    <PortfolioItemRow index={i} group={g} />
                ))}
                <Footer />
            </Container>
        </div>
    )
}

const PortfolioItemRow = ({ index, group }) => (
    <Row className={index === 0 ? 'mt-1' : 'mt-3'}>
        {group.map(v => (
            <PortfolioItem
                to={v.href}
                header={v.header}
                imageSrc={background}
                title={v.title}
                text={v.text}
                footer={v.footer}
            />
        ))}
    </Row>
)

const PortfolioItem = ({ to, header, imageSrc, title, text, footer }) => (
    <Col xs={3}>
        <NavLink to={to} style={{ textDecoration: 'none' }}>
            <Card className="h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                <Card.Header>{header}</Card.Header>
                <Card.Img height={120} src={imageSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text as={'h3'}>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>{footer}</Card.Footer>
            </Card>
        </NavLink>
    </Col>
)