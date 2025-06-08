import { Button, Col, Container, Image, ProgressBar, Row } from "react-bootstrap"
import profile from './assets/profile4.jpg'
import background from './assets/background.jpg'
import { Divider } from "@mui/material"
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import GitHubIcon from '@mui/icons-material/GitHub'
import Chip from '@mui/material/Chip'
import { Phone } from "@mui/icons-material"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Footer } from "./components/Footer"

// build template to build all pages from if reusable components
// PortfolioLayout component to use for all portfolio pages with markdown

// use svg instead!

export const About = () => {
    //about-education.json
    //about-experience.json

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
                    {/* <Col xs={4}>
                        <h1>Socials</h1>
                        <p style={{ margin: 0, marginBottom: '2px', verticalAlign: 'middle', display: 'flex', alignItems: 'center'}}><AlternateEmailIcon className="me-1" />Email</p>
                        <p style={{ margin: 0, marginBottom: '2px',verticalAlign: 'middle', display: 'flex', alignItems: 'center'}}><Phone className="me-1" /> Phone</p>
                        <p style={{ margin: 0, marginBottom: '2px',verticalAlign: 'middle', display: 'flex', alignItems: 'center'}}><LinkedInIcon className="me-1" /> LinkedIn</p>
                        <p style={{ margin: 0, marginBottom: '2px',verticalAlign: 'middle', display: 'flex', alignItems: 'center'}}><GitHubIcon className="me-1" /> Github</p>
                    </Col> */}
                </Row>
                <Row>
                    <Col>
                        <h1>Education</h1>
                        <div>
                            <h2 className="mb-1">BSc Games Software Engineering</h2>
                            <h3>Bournemouth University | <em>September 2018 - June 2021</em></h3>
                            {/* <h3>September 2018 - June 2021</h3> */}
                            {/* <h3>Bournemouth University</h3> */}
                            <p>Dissertation: Implementing a Procedural Algorithm for Generation of a Rogue-like Dungeon. BSc (Hons) Games Software Engineering: Second Class (Upper) Honours.</p>
                        </div>
                        <div>
                            <h2 className="mb-1">A Levels</h2>
                            <h3>Palmers Sixth Form College | <em>September 2016 - June 2018</em></h3>
                            {/* <h3>September 2016 - June 2018</h3> */}
                            {/* <h3>Palmers Sixth Form College</h3> */}
                            <p>Mathematics, Computer Science, Physics.</p>
                        </div>
                        <div>
                            <h2 className="mb-1">GCSEs</h2>
                            <h3>St Clere's Secondary School | <em>September 2011 - June 2016</em></h3>
                            {/* <h3>September 2011 - June 2016</h3> */}
                            {/* <h3>St Clere's Secondary School</h3> */}
                            <p>Mathematics, ICT, Physics, Product Design, Religious Studies, Chemistry, Biology, History, English Language, English Literature.</p>
                        </div>
                    </Col>
                    <Col>
                        <h1>Experience</h1>
                        <div>
                            {/* <Row>
                                <Col>
                                    <h2>Game Developer</h2>
                                </Col>
                                <Col>
                                    <h3>Playtech | September 2023 - Present</h3>
                                </Col>
                            </Row> */}
                            <h2 className="mb-1">Game Developer</h2>
                            <h3>Playtech | <em>September 2023 - Present</em></h3>
                            {/* <h3>Playtech, Ash Studio, London</h3> */}
                            <p>
                                I continue to be involved in the same tasks as well as having further responsibilities.
                                More emphasise on the success of the studio and how I can impact this success.
                                I've been math lead in a number of game projects, designing the logic and producing successful math balances.
                                Taken ownership of our web process, developing and maintaining our simulator and prototype tooling.
                                Helped to train a newly recruited junior developer in our processes.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-1">Junior Developer</h2>
                            <h3>Playtech | <em>October 2021 - August 2023</em></h3>
                            {/* <h3>Playtech, Ash Studio, London</h3> */}
                            <p>
                                Producing simulators to generate math reports and prototypes to aid in balancing the game math.
                                Learnt various technical skills in this role as well as becoming proficient in C# and JavaScript languages.
                                Took ownership of our transition to a new development process which migrated our tooling to a web server instead of locally.
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-1">Kitchen Porter</h2>
                            <h3>The Bell Inn | <em>October 2016 - January 2020</em></h3>
                            {/* <h3>The Bell Inn, Horndon-on-the-Hill, Essex</h3> */}
                            <p>Completed jobs such as cleaning, washing up and unloading deliveries while working under pressure and supporting others in a team role.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Languages, Frameworks and Skills</h1>
                        <Row>
                            <Col>
                                <SkillProgressBar label={'C#'} progress={99} />
                                <SkillProgressBar label={'C++'} progress={80} />
                                <SkillProgressBar label={'JavaScript'} progress={99} />
                                <SkillProgressBar label={'HTML + CSS'} progress={99} />
                                <SkillProgressBar label={'Visual Basic for Applications (VBA)'} progress={60} />
                                <SkillProgressBar label={'Java'} progress={40} />
                            </Col>
                            <Col>
                                <SkillProgressBar label={'Unity'} progress={99} />
                                <SkillProgressBar label={'OpenGL'} progress={60} />
                                <SkillProgressBar label={'React'} progress={90} />
                                <SkillProgressBar label={'Bootstrap'} progress={99} />
                                <SkillProgressBar label={'Linux Ubuntu'} progress={60} />
                                <SkillProgressBar label={'Problem Solving'} progress={99} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

const SkillProgressBar = ({ label, progress }) => {
    return (
        <>
            <label>{label}</label>
            <ProgressBar now={progress} label={`${progress}%`} variant='success' style={{ border: '2px solid white', marginBottom: '5px' }} />
        </>
    )
}