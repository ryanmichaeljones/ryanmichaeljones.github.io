import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NotFound } from '@/pages/NotFound'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('NotFound', () => {
    it('renders the 404 heading', () => {
        renderWithRouter(<NotFound />)
        expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument()
    })

    it('renders the error description', () => {
        renderWithRouter(<NotFound />)
        expect(screen.getByText(/the page you are looking for does not exist/)).toBeInTheDocument()
    })

    it('renders a link to the homepage', () => {
        renderWithRouter(<NotFound />)
        const link = screen.getByText('homepage')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/')
    })

    it('renders the footer', () => {
        renderWithRouter(<NotFound />)
        const year = new Date().getFullYear()
        expect(screen.getByText(`Copyright © Ryan Jones ${year}`)).toBeInTheDocument()
    })
})
