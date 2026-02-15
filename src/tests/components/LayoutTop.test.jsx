import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { LayoutTop } from '@/components/layout/LayoutTop'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('LayoutTop', () => {
    it('renders the brand name', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByText('ryanmjones.co.uk')).toBeInTheDocument()
    })

    it('renders the brand code highlight', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByText('</>')).toBeInTheDocument()
    })

    it('renders all navigation links', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Portfolio')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('has correct navigation aria label', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    })

    it('has accessible brand link', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByLabelText('Home - ryanmjones.co.uk')).toBeInTheDocument()
    })

    it('has a toggle button for mobile navigation', () => {
        renderWithRouter(<LayoutTop />)
        expect(screen.getByLabelText('Toggle navigation')).toBeInTheDocument()
    })
})
