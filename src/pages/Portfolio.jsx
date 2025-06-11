import { Card, Col, Container, Row } from 'react-bootstrap'
import background from '../assets/background.jpg'
import { Footer } from '../components/Footer'
import projects from '../assets/portfolio-projects.json'

export const Portfolio = () => {
    // json structure with data
    // pull data and then map it to components, split into groups of up to 4 items per row
    //portfolio-projects.json

    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item, i) => {
            const key = keyGetter(item, i);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return Array.from(map, ([name, value]) => ({ name, value }))
    }

    const groups = groupBy(projects, (p, i) => Math.floor(i / 4))

    return (
        <div className='portfolio'>
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col>
                        <h1>My Projects</h1>
                    </Col>
                </Row>
                {groups?.map((g, i) => <Row className={i === 0 ? 'mt-1' : 'mt-3'}>
                    {g.value.map(v => <PortfolioItem href={v.href} header={v.header} imageSrc={background} title={v.title} text={v.text} footer={v.footer} />)}
                </Row>)}
                <Row className="pt-1">
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/dissertation'}
                        header={'Dissertation'}
                        imageSrc={background}
                        title={'Procedural Dungeon Generator'}
                        text={'Implementing a Procedural Algorithm for Generation of a Rogue-like Dungeon'}
                        footer={'C#, Unity'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/chaotic-engine'}
                        header={'Chaotic Engine'}
                        imageSrc={background}
                        title={'Custom 3D Game Engine'}
                        text={'Project which started as a university assignment and continued to be developed in my free time'}
                        footer={'C#, OpenGL, SDL'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/portfolio-website'}
                        header={'Portfolio Website'}
                        imageSrc={background}
                        title={'Custom Website'}
                        text={'Website developed in my free time to host my portfolio of work'}
                        footer={'React, JavaScript, HTML, CSS'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/playtech-slot-games'}
                        header={'Playtech Slot Games'}
                        imageSrc={background}
                        title={'Slot Games'}
                        text={'Collection of slot games that I helped develop and balance'}
                        footer={'Miscellaneous'}
                    />
                    {/* </Col> */}
                </Row>
                <Row className="mt-3">
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/maze-fps-game'}
                        header={'Maze FPS Game'}
                        imageSrc={background}
                        title={'3D Recursive Backtracker Maze Game'}
                        text={'First-person shooter in randomised procedural maze levels using AI enemies and physics'}
                        footer={'C#, Unity'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/dynamic-preference-menu'}
                        header={'Dynamic Preference Menu'}
                        imageSrc={background}
                        title={'Settings Menu Builder'}
                        text={'Utility to build menus dynamically with preferences based on user requirements'}
                        footer={'C#, Unity'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/ribit-run-game'}
                        header={'Ribit Run Game'}
                        imageSrc={background}
                        title={'Frogger-inspired 2D Game'}
                        text={'University assignment which took inspiration from classic 1981 game Frogger'}
                        footer={'C++, SDL'}
                    />
                    {/* </Col> */}
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio/tender-proposal'}
                        header={'Project Management'}
                        imageSrc={background}
                        title={'Tender Proposal'}
                        text={'University assignment to produce a tender proposal for the Natural History Museum'}
                        footer={'Microsoft Project'}
                    />
                    {/* </Col> */}
                </Row>
                <Row className="mt-3">
                    {/* <Col xs={3}> */}
                    <PortfolioItem
                        href={'/portfolio'}
                        header={'Under Construction'}
                        imageSrc={background}
                        title={'Coming Soon'}
                        text={'Check here again soon for updates!'}
                        footer={'...'}
                    />
                    {/* </Col> */}
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

const PortfolioItem = ({ href, header, imageSrc, title, text, footer }) => {
    return (
        <Col xs={3}>
            <a href={href} style={{ textDecoration: 'none' }}>
                <Card className="h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                    <Card.Header>{header}</Card.Header>
                    <Card.Img height={120} src={imageSrc} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{footer}</Card.Footer>
                </Card>
            </a>
        </Col>
    )
}