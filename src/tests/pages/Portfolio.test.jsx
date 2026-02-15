import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Portfolio } from '@/pages/Portfolio'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('Portfolio', () => {
    it('renders the heading', () => {
        renderWithRouter(<Portfolio />)
        expect(screen.getByText('My Projects')).toBeInTheDocument()
    })

    it('renders the footer', () => {
        renderWithRouter(<Portfolio />)
        const year = new Date().getFullYear()
        expect(screen.getByText(`Copyright © Ryan Jones ${year}`)).toBeInTheDocument()
    })
})
