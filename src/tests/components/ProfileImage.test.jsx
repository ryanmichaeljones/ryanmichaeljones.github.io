import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileImage } from '@/components/home/ProfileImage'

describe('ProfileImage', () => {
    it('renders the image with correct alt text', () => {
        render(<ProfileImage src="/test-image.png" alt="Test profile" />)
        const img = screen.getByAltText('Test profile')
        expect(img).toBeInTheDocument()
    })

    it('renders the image with lazy loading', () => {
        render(<ProfileImage src="/test-image.png" alt="Test profile" />)
        const img = screen.getByAltText('Test profile')
        expect(img).toHaveAttribute('loading', 'lazy')
    })

    it('renders the image with async decoding', () => {
        render(<ProfileImage src="/test-image.png" alt="Test profile" />)
        const img = screen.getByAltText('Test profile')
        expect(img).toHaveAttribute('decoding', 'async')
    })

    it('renders the profile container', () => {
        const { container } = render(<ProfileImage src="/test-image.png" alt="Test profile" />)
        const profileContainer = container.querySelector('[class*="profileContainer"]')
        expect(profileContainer).toBeInTheDocument()
    })
})
