import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

describe('LoadingSpinner', () => {
    it('renders a spinner', () => {
        render(<LoadingSpinner />)
        expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('has accessible loading text for screen readers', () => {
        render(<LoadingSpinner />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
})
