import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Home'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { LayoutTop } from './LayoutTop'

export default function App() {
  return (
    <BrowserRouter>
      <LayoutTop />
      <Routes>
        <Route index to='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
