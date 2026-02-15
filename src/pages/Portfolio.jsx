import { Container, Row, Col } from 'react-bootstrap'
import { Footer } from '@/components'
import { PortfolioItem } from '@/components/portfolio'
import projects from '@/assets/portfolio-cards.json'
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal'
import styles from '@/styles/pages.module.scss'

export const Portfolio = () => {
    const visibleItems = useStaggeredReveal(projects.length, 100)

    return (
        <div className={styles.contentPage}>
            <Container>
                <Row className='pt-4'>
                    <Col>
                        <h1 className='mb-0'>My Projects</h1>
                    </Col>
                </Row>
                <Row className='mt-n2'>
                    {projects.map((item, idx) => (
                        <PortfolioItem 
                            key={item.to || idx} 
                            {...item} 
                            isVisible={idx < visibleItems}
                            animationDelay={idx * 50} // Stagger animations
                        />
                    ))}
                </Row>
                <Footer />
            </Container>
        </div>
    )
}