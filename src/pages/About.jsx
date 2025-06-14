import { Col, Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import { SkillProgressBar } from "../components/ProgressBar"
import educationData from '../assets/about-education.json'
import experienceData from '../assets/about-experience.json'
import skillsData from '../assets/about-skills.json'
import { groupBy } from "../utils/GroupBy"

export const About = () => {
    const skillColData = groupBy(skillsData, (_, i) => Math.floor(i / 6))

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
                        <div className="education-list">
                            {educationData.map(education => (
                                <div
                                    key={`${education.title}-${education.period}`}
                                    className="p-2 mb-3 rounded" // Reduced padding and margin
                                    style={{
                                        background: "rgba(20, 30, 50, 0.85)",
                                        borderLeft: "5px solid #0d7af6",
                                        boxShadow: "0 1px 6px rgba(0,0,0,0.06)" // Softer shadow
                                    }}
                                >
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <h2 className="mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>{education.title}</h2>
                                        <span style={{ fontSize: "0.95em", opacity: 0.85 }}>
                                            <em>{education.period}</em>
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '0.95em', opacity: 1, fontWeight: 400, marginBottom: 5 }}>{education.institution}</h3>
                                    <p style={{ fontSize: '0.92em', opacity: 0.92, marginBottom: 0 }}>{education.description}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <h1>Experience</h1>
                        <div className="experience-list">
                            {experienceData.map(experience => (
                                <div
                                    key={`${experience.title}-${experience.period}`}
                                    className="p-2 mb-3 rounded" // Reduced padding and margin
                                    style={{
                                        background: "rgba(20, 30, 50, 0.85)",
                                        borderLeft: "5px solid #0d7af6",
                                        boxShadow: "0 1px 6px rgba(0,0,0,0.06)" // Softer shadow
                                    }}
                                >
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <h2 className="mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>{experience.title}</h2>
                                        <span style={{ fontSize: "0.95em", opacity: 0.85 }}>
                                            <em>{experience.period}</em>
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '0.95em', opacity: 1, fontWeight: 400, marginBottom: 5 }}>{experience.company}</h3>
                                    <p style={{ fontSize: '0.92em', opacity: 0.92, marginBottom: 0 }}>{experience.description}</p>
                                </div>
                            ))}
                        </div>
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