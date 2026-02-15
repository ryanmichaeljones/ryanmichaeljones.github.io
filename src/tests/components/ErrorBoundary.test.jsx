import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'

const ThrowError = () => {
    throw new Error('Test error')
}

const GoodComponent = () => <div>Working content</div>

describe('ErrorBoundary', () => {
    // Suppress console.error for expected error boundary logs
    const originalConsoleError = console.error
    beforeEach(() => {
        console.error = vi.fn()
    })
    afterEach(() => {
        console.error = originalConsoleError
    })

    it('renders children when no error occurs', () => {
        render(
            <ErrorBoundary>
                <GoodComponent />
            </ErrorBoundary>
        )
        expect(screen.getByText('Working content')).toBeInTheDocument()
    })

    it('renders error UI when a child throws', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        )
        expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
    })

    it('shows a homepage button in error state', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        )
        expect(screen.getByText('Go to Homepage')).toBeInTheDocument()
    })

    it('shows helpful description text in error state', () => {
        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        )
        expect(screen.getByText(/Please try refreshing the page/)).toBeInTheDocument()
    })
})
