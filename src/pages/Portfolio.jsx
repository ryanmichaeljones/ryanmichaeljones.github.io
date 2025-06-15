import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '@/assets/background.jpg'
import { Footer } from '@/components/Footer'
import projects from '@/assets/portfolio-cards.json'
import { NavLink } from 'react-router-dom'
import { groupBy } from '@/utils/GroupBy'

// const allImages = import.meta.glob('./assets/images/*.jpg')

const CARD_BG = 'rgba(255,255,255,0.07)'
const CARD_HOVER_BG = 'rgba(13, 122, 246, 0.15)'
const CARD_BORDER = '1.5px solid #0d7af6'

export const Portfolio = () => {
    const projectRowData = groupBy(projects, (_, i) => Math.floor(i / 4))
    // const allImages = import.meta.glob('../assets/images/portfolio-thumbnails/*.jpg')

    // allImages["../assets/images/portfolio-thumbnails/dissertation-1.jpg"]().then(m => console.log(m))

    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col>
                        <h1>My Projects</h1>
                    </Col>
                </Row>
                {projectRowData?.map((g, i) => (
                    <PortfolioItemRow key={i} index={i} group={g} />
                ))}
                <Footer />
            </Container>
        </div>
    )
}

const PortfolioItemRow = ({ index, group }) => (
    <Row className={index === 0 ? 'mt-1' : 'mt-4'} style={{ gap: 0 }}>
        {group.map((v, idx) => (
            <PortfolioItem
                key={v.to || idx}
                to={v.to}
                header={v.header}
                imageSrc={v.imagePath === '' ? background : v.imagePath}
                title={v.title}
                text={v.text}
                footer={v.footer}
            />
        ))}
    </Row>
)

const PortfolioItem = ({ to, header, imageSrc, title, text, footer }) => (
    <Col xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
        <NavLink to={to} style={{ textDecoration: 'none', width: '100%' }}>
            <Card
                className="h-100 shadow-sm portfolio-card"
                style={{
                    backgroundColor: CARD_BG,
                    color: 'white',
                    transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
                }}
            >
                <Card.Header style={{
                    background: 'transparent',
                    borderBottom: '0',
                    fontWeight: 600,
                    fontSize: '1.1em',
                    letterSpacing: '0.01em'
                }}>
                    {header}
                </Card.Header>
                <Card.Img className="align-self-center" src={imageSrc} style={{
                    // maxHeight: 120,
                    objectFit: 'cover',
                    // width: '90%',
                    height: '11vh'
                }} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: 600, fontSize: '1.15em' }}>{title}</Card.Title>
                    <Card.Text as="div" style={{ fontSize: '1em', opacity: 0.92, minHeight: 48 }}>
                        {text}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{
                    background: 'transparent',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.95em',
                    opacity: 0.8
                }}>
                    {footer}
                </Card.Footer>
            </Card>
        </NavLink>
    </Col>
)