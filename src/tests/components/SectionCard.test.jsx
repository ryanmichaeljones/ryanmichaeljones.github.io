import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionCard } from '@/components/SectionCard'

describe('SectionCard', () => {
    const defaultProps = {
        title: 'Software Engineer',
        period: '2023 - Present',
        subtitle: 'Playtech',
        description: 'Building slot games'
    }

    it('renders the title', () => {
        render(<SectionCard {...defaultProps} />)
        expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    })

    it('renders the period', () => {
        render(<SectionCard {...defaultProps} />)
        expect(screen.getByText('2023 - Present')).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
        render(<SectionCard {...defaultProps} />)
        expect(screen.getByText('Playtech')).toBeInTheDocument()
    })

    it('renders the description', () => {
        render(<SectionCard {...defaultProps} />)
        expect(screen.getByText('Building slot games')).toBeInTheDocument()
    })

    it('renders title as h2', () => {
        render(<SectionCard {...defaultProps} />)
        const heading = screen.getByRole('heading', { level: 2 })
        expect(heading).toHaveTextContent('Software Engineer')
    })

    it('renders subtitle as h3', () => {
        render(<SectionCard {...defaultProps} />)
        const heading = screen.getByRole('heading', { level: 3 })
        expect(heading).toHaveTextContent('Playtech')
    })
})
