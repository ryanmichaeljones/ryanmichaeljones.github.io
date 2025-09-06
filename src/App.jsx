import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Portfolio, Contact, PortfolioProject, Resume, NotFound } from '@/pages'
import { LayoutTop } from '@/components'
import projects from '@/assets/portfolio-projects.json'

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ height: '100vh', overflowY: 'hidden' }}>
                <LayoutTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                    {projects.map(project => (
                        <Route 
                            key={project.to} 
                            path={project.to} 
                            element={<PortfolioProject project={project} />} 
                        />
                    ))}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
