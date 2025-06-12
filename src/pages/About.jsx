import { Col, Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import { SkillProgressBar } from "../components/ProgressBar"
import educationData from '../assets/about-education.json'
import experienceData from '../assets/about-experience.json'
import skills from '../assets/about-skills.json'
import { groupBy } from "../utils/GroupBy"

export const About = () => {
    const skillColData = groupBy(skills, (_, i) => Math.floor(i / 6))

    return (
        <div className='about'>
            <Container style={{ color: 'white' }}>
                <Row className="pt-4">
                    <Col xs={12}>
                        <h1>Overview</h1>
                        <p className="mb-2">
                            Hi, I am Ryan!
                            I am a responsible and highly motivated BSc Games Software Engineering graduate of Bournemouth University.
                            Currently I am employed as a game developer at Playtech for the Ash studio which specialises in online gambling slot games.
                            I have a passion for programming which drives me to adapt and solve problems to reach the desired outcome.
                            When I'm not developing games, I enjoy spending time going to the gym and playing strategy games.
                        </p>
                        <p>
                            I hope you enjoy looking through my portfolio and don't hesitate to get in touch with me!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Education</h1>
                        {educationData.map(education => (
                            <div key={`${education.title}-${education.period}`}>
                                <h2 className="mb-1">{education.title}</h2>
                                <h3>{education.institution} | <em>{education.period}</em></h3>
                                <p>{education.description}</p>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <h1>Experience</h1>
                        {experienceData.map(experience => (
                            <div key={`${experience.title}-${experience.period}`}>
                                <h2 className="mb-1">{experience.title}</h2>
                                <h3>{experience.company} | <em>{experience.period}</em></h3>
                                <p>{experience.description}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Languages, Frameworks and Skills</h1>
                        <Row>
                            {skillColData.map((group, index) => (
                                <Col key={index}>
                                    {group.map(skill => (
                                        <SkillProgressBar key={skill.label} label={skill.label} progress={skill.progress} />
                                    ))}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}