import { Col, Container, Row } from 'react-bootstrap'
import { Footer } from '@/components/Footer'
import { SkillProgressBar } from '@/components/ProgressBar'
import { SectionCard } from '@/components/common/SectionCard'
import educationData from '@/assets/about-education.json'
import experienceData from '@/assets/about-experience.json'
import skillsData from '@/assets/about-skills.json'
import { groupBy } from '@/utils/GroupBy'
import { SKILLS_PER_COLUMN } from '@/constants'

export const About = () => {
    const skillColData = groupBy(skillsData, (_, i) => Math.floor(i / SKILLS_PER_COLUMN))

    return (
        <div className='about'>
            <Container style={{ color: 'white' }}>
                <Row className='pt-4'>
                    <Col xs={12}>
                        <h1>Overview</h1>
                        <p className='mb-2'>
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
                    <Col xs={12} md={6}>
                        <h1>Education</h1>
                        <div className='education-list'>
                            {educationData.map(edu => (
                                <SectionCard
                                    key={`${edu.title}-${edu.period}`}
                                    title={edu.title}
                                    period={edu.period}
                                    subtitle={edu.institution}
                                    description={edu.description}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>Experience</h1>
                        <div className='experience-list'>
                            {experienceData.map(exp => (
                                <SectionCard
                                    key={`${exp.title}-${exp.period}`}
                                    title={exp.title}
                                    period={exp.period}
                                    subtitle={exp.company}
                                    description={exp.description}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Languages, Frameworks and Skills</h1>
                        <Row>
                            {skillColData.map((group, idx) => (
                                <Col key={idx}>
                                    {group.map(skill => (
                                        <SkillProgressBar 
                                            key={skill.label} 
                                            label={skill.label} 
                                            progress={skill.progress} 
                                        />
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