import { BrowserRouter, Route, Routes } from 'react-router'
// import './App.css'
import { Home } from './Home'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { LayoutTop } from './LayoutTop'
import background from './assets/background.jpg'
import { About } from './About'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'
import { PortfolioPage } from './PortfolioPage'
import PortfolioPages from './assets/portfolio-pages.json'
import { useEffect, useState } from 'react'

export default function App() {
    const [portfolioRoutes, setPortfolioRoutes] = useState([])

    useEffect(() => {
        Promise.all(PortfolioPages.map(p => fetch(p.markdown, { method: 'get' })
            .then(res => res.text())
            .then(text => ({ to: p.to, markdown: text }))))
            .then(routes => setPortfolioRoutes(routes))

    }, [])

    console.log(portfolioRoutes)
    return (
        <BrowserRouter basename=''>
            <div style={{ height: '100vh', overflowY: 'hidden' }}>
                <LayoutTop />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    {portfolioRoutes?.map(r => <Route path={r.to} element={<PortfolioPage markdown={r.markdown} />} />)}
                    {/* <Route path='' element={<PortfolioPage markdown={dissertationPage} />}/> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}
