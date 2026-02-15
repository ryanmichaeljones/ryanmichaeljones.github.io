import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioItem } from '@/components/portfolio/PortfolioItem'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('PortfolioItem', () => {
    const defaultProps = {
        to: '/portfolio/test-project',
        header: 'Personal Project',
        imagePath: '/images/test.png',
        title: 'Test Project',
        text: 'A test project description',
        footer: 'React, JavaScript',
        isVisible: true,
        animationDelay: 0
    }

    it('renders the card title', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('renders the card header', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        expect(screen.getByText('Personal Project')).toBeInTheDocument()
    })

    it('renders the card text', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        expect(screen.getByText('A test project description')).toBeInTheDocument()
    })

    it('renders the card footer', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        expect(screen.getByText('React, JavaScript')).toBeInTheDocument()
    })

    it('links to the correct project page', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/portfolio/test-project')
    })

    it('renders the image with alt text when visible', async () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        const img = screen.getByAltText('Test Project')
        expect(img).toBeInTheDocument()
    })

    it('applies lazy loading to image', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} />)
        const img = screen.getByAltText('Test Project')
        expect(img).toHaveAttribute('loading', 'lazy')
    })

    it('does not render image when not visible', () => {
        renderWithRouter(<PortfolioItem {...defaultProps} isVisible={false} />)
        expect(screen.queryByAltText('Test Project')).not.toBeInTheDocument()
    })
})
