import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('Home', () => {
    it('renders the greeting', () => {
        renderWithRouter(<Home />)
        expect(screen.getByText('Hello, I\'m Ryan!')).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
        renderWithRouter(<Home />)
        expect(screen.getByText('Game Developer & Software Engineer.')).toBeInTheDocument()
    })

    it('renders the description', () => {
        renderWithRouter(<Home />)
        expect(screen.getByText(/Building engaging experiences/)).toBeInTheDocument()
    })

    it('renders the location', () => {
        renderWithRouter(<Home />)
        expect(screen.getByText(/Based in London, UK/)).toBeInTheDocument()
    })

    it('renders the CTA button linking to portfolio', () => {
        renderWithRouter(<Home />)
        const button = screen.getByText('View My Work')
        expect(button).toBeInTheDocument()
        expect(button.closest('a')).toHaveAttribute('href', '/portfolio')
    })

    it('renders the profile image', () => {
        renderWithRouter(<Home />)
        expect(screen.getByAltText('Ryan Jones')).toBeInTheDocument()
    })

    it('uses h1 for the greeting', () => {
        renderWithRouter(<Home />)
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1).toHaveTextContent('Hello, I\'m Ryan!')
    })
})
