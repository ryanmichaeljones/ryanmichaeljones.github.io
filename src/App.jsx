import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { LayoutTop } from './LayoutTop'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { PortfolioProject } from './pages/PortfolioProject'
import projects from './assets/portfolio-projects.json'

export default function App() {
    return (
        <BrowserRouter basename=''>
            <div style={{ height: '100vh', overflowY: 'hidden' }}>
                <LayoutTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    {projects.map(project => (
                        <Route key={project.to} path={project.to} element={<PortfolioProject project={project} />} />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    )
}
