import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App', () => {
    it('renders the navigation', () => {
        render(<App />)
        expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    })

    it('renders the skip to content link', () => {
        render(<App />)
        expect(screen.getByText('Skip to main content')).toBeInTheDocument()
    })

    it('renders the home page by default', () => {
        render(<App />)
        expect(screen.getByText('Hello, I\'m Ryan!')).toBeInTheDocument()
    })

    it('renders the main content landmark', () => {
        render(<App />)
        expect(screen.getByRole('main')).toBeInTheDocument()
    })
})
