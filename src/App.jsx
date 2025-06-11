import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { LayoutTop } from './LayoutTop'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
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
