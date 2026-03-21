import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { About } from '@/pages/About'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('About', () => {
    it('renders the Overview heading', () => {
        renderWithRouter(<About />)
        expect(screen.getByText('Overview')).toBeInTheDocument()
    })

    it('renders the Education heading', () => {
        renderWithRouter(<About />)
        expect(screen.getByText('Education')).toBeInTheDocument()
    })

    it('renders the Experience heading', () => {
        renderWithRouter(<About />)
        expect(screen.getByText('Experience')).toBeInTheDocument()
    })

    it('renders the Skills heading', () => {
        renderWithRouter(<About />)
        expect(screen.getByText('Languages, Frameworks and Skills')).toBeInTheDocument()
    })

    it('renders the introduction text', () => {
        renderWithRouter(<About />)
        expect(screen.getByText(/Software Engineer and Math Team Lead at Playtech/)).toBeInTheDocument()
    })

    it('renders the footer', () => {
        renderWithRouter(<About />)
        const year = new Date().getFullYear()
        expect(screen.getByText(`Copyright © Ryan Jones ${year}`)).toBeInTheDocument()
    })
})
