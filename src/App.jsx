import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Home } from '@/pages'
import { LayoutTop, ErrorBoundary } from '@/components'
import { LoadingSpinner } from '@/components/common'
import projects from '@/assets/portfolio-projects.json'

// Lazy load route components for better performance
const About = lazy(() => import('@/pages/About').then(module => ({ default: module.About })))
const Portfolio = lazy(() => import('@/pages/Portfolio').then(module => ({ default: module.Portfolio })))
const Contact = lazy(() => import('@/pages/Contact').then(module => ({ default: module.Contact })))
const Resume = lazy(() => import('@/pages/Resume').then(module => ({ default: module.Resume })))
const PortfolioProject = lazy(() => import('@/pages/PortfolioProject').then(module => ({ default: module.PortfolioProject })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))

export default function App() {
    return (
        <BrowserRouter>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <div className="app-container">
                <LayoutTop />
                <ErrorBoundary>
                    <main id="main-content">
                        <Suspense fallback={<LoadingSpinner />}>
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
                        </Suspense>
                    </main>
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    )
}
