import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from '@/components/Section'

describe('Section', () => {
    it('renders the title', () => {
        render(<Section title="Test Section"><p>Content</p></Section>)
        expect(screen.getByText('Test Section')).toBeInTheDocument()
    })

    it('renders children', () => {
        render(<Section title="Test"><p>Child content</p></Section>)
        expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('renders the title as h2', () => {
        render(<Section title="My Title"><p>Content</p></Section>)
        const heading = screen.getByRole('heading', { level: 2 })
        expect(heading).toHaveTextContent('My Title')
    })

    it('wraps content in a section element', () => {
        const { container } = render(<Section title="Test"><p>Content</p></Section>)
        expect(container.querySelector('section')).toBeInTheDocument()
    })
})
