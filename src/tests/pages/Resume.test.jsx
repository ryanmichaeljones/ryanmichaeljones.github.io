import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resume } from '@/pages/Resume'

describe('Resume', () => {
    it('renders the PDF object', () => {
        const { container } = render(<Resume />)
        const pdfObject = container.querySelector('object')
        expect(pdfObject).toBeInTheDocument()
        expect(pdfObject).toHaveAttribute('type', 'application/pdf')
    })

    it('has accessible label on PDF object', () => {
        const { container } = render(<Resume />)
        const pdfObject = container.querySelector('object')
        expect(pdfObject).toHaveAttribute('aria-label', 'Ryan Jones CV PDF')
    })

    it('renders a fallback download link', () => {
        render(<Resume />)
        expect(screen.getByText('Download Ryan Jones CV.pdf')).toBeInTheDocument()
    })
})
