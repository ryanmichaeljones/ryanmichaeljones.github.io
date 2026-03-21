import { Col, Container, Row } from 'react-bootstrap'
import { useMemo } from 'react'
import { Footer, SkillProgressBar, SectionCard } from '@/components'
import educationData from '@/assets/about-education.json'
import experienceData from '@/assets/about-experience.json'
import skillsData from '@/assets/about-skills.json'
import { groupBy } from '@/utils/GroupBy'
import { SKILLS_PER_COLUMN } from '@/constants'
import styles from '@/styles/pages.module.scss'

export const About = () => {
    const skillColData = useMemo(
        () => groupBy(skillsData, (_, i) => Math.floor(i / SKILLS_PER_COLUMN)),
        []
    )

    return (
        <div className={styles.contentPage}>
            <Container>
                <Row className='pt-4'>
                    <Col xs={12}>
                        <h1>Overview</h1>
                        <p className='mb-2'>
                            Hi, I'm Ryan - a Software Engineer and Math Team Lead at Playtech's Ash studio, where I lead a team developing mathematics for online slot games.
                            With over four years of experience and a BSc in Games Software Engineering from Bournemouth University, I enjoy solving complex problems and continuously improving the tools and processes my team relies on.
                        </p>
                        <p>
                            Outside of work, I stay active at the gym and enjoy playing strategy games.
                            Feel free to explore my projects or get in touch!
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