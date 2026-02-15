import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProject } from '@/pages/PortfolioProject'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('PortfolioProject', () => {
    const project = {
        title: 'Test Project',
        subtitle: 'A cool project',
        period: '2024',
        description: 'This is a test project description.',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        links: [
            { url: 'https://github.com/test', label: 'GitHub Repository' }
        ],
        images: [
            { src: '/images/test1.png', alt: 'Screenshot 1' },
            { src: '/images/test2.png', alt: 'Screenshot 2' }
        ]
    }

    it('renders the project title', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('renders the project subtitle', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('A cool project')).toBeInTheDocument()
    })

    it('renders the project period', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('2024')).toBeInTheDocument()
    })

    it('renders the description', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('This is a test project description.')).toBeInTheDocument()
    })

    it('renders all features', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('Feature 1')).toBeInTheDocument()
        expect(screen.getByText('Feature 2')).toBeInTheDocument()
        expect(screen.getByText('Feature 3')).toBeInTheDocument()
    })

    it('renders links', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        const link = screen.getByText('GitHub Repository')
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', 'https://github.com/test')
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders section headings', () => {
        renderWithRouter(<PortfolioProject project={project} />)
        expect(screen.getByText('Description')).toBeInTheDocument()
        expect(screen.getByText('Features')).toBeInTheDocument()
        expect(screen.getByText('Links')).toBeInTheDocument()
    })

    it('renders fallback image when no images provided', () => {
        const noImagesProject = { ...project, images: [] }
        renderWithRouter(<PortfolioProject project={noImagesProject} />)
        expect(screen.getByAltText('Project fallback')).toBeInTheDocument()
    })

    it('renders without features or links when empty', () => {
        const minimalProject = {
            title: 'Minimal',
            subtitle: 'Simple',
            period: '2024',
            description: 'Minimal project',
            features: [],
            links: []
        }
        renderWithRouter(<PortfolioProject project={minimalProject} />)
        expect(screen.getByText('Minimal')).toBeInTheDocument()
        expect(screen.queryByText('Features')).not.toBeInTheDocument()
        expect(screen.queryByText('Links')).not.toBeInTheDocument()
    })
})
