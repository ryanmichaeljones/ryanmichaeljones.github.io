import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'

describe('Footer', () => {
    it('renders copyright text with current year', () => {
        render(<Footer />)
        const year = new Date().getFullYear()
        expect(screen.getByText(`Copyright © Ryan Jones ${year}`)).toBeInTheDocument()
    })

    it('renders email link', () => {
        render(<Footer />)
        const emailLink = screen.getByLabelText('Email')
        expect(emailLink).toBeInTheDocument()
        expect(emailLink).toHaveAttribute('href', 'mailto:ryanmichaeljonesbusiness@gmail.com')
    })

    it('renders phone link', () => {
        render(<Footer />)
        const phoneLink = screen.getByLabelText('Phone')
        expect(phoneLink).toBeInTheDocument()
        expect(phoneLink).toHaveAttribute('href', 'tel:+447930373660')
    })

    it('renders LinkedIn link with external attributes', () => {
        render(<Footer />)
        const linkedinLink = screen.getByLabelText('LinkedIn')
        expect(linkedinLink).toBeInTheDocument()
        expect(linkedinLink).toHaveAttribute('target', '_blank')
        expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders GitHub link with external attributes', () => {
        render(<Footer />)
        const githubLink = screen.getByLabelText('GitHub')
        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute('target', '_blank')
        expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders four social links', () => {
        render(<Footer />)
        const links = ['Email', 'Phone', 'LinkedIn', 'GitHub']
        links.forEach(label => {
            expect(screen.getByLabelText(label)).toBeInTheDocument()
        })
    })
})
