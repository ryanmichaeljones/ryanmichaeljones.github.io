import { Col, Container, Row } from 'react-bootstrap'
import { Footer, SkillProgressBar, SectionCard } from '@/components'
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
                            Hi, I'm Ryan!
                            I'm a passionate BSc Games Software Engineering graduate from Bournemouth University with a strong foundation in problem-solving and software development.
                            Currently, I serve as Math Team Lead at Playtech's Ash studio, where I specialize in developing mathematics for online gambling slot games.
                            My enthusiasm for programming drives me to continuously learn new technologies and tackle complex challenges to deliver exceptional results.
                            Outside of work, I maintain an active lifestyle through going to the gym and enjoy playing strategy games.
                        </p>
                        <p>
                            I'm excited to share my projects and experiences with you through this portfolio. Feel free to reach out if you'd like to connect or discuss potential opportunities!
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