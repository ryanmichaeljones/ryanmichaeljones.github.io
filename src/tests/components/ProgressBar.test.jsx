import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SkillProgressBar } from '@/components/ProgressBar'

describe('SkillProgressBar', () => {
    it('renders the label', () => {
        render(<SkillProgressBar label="JavaScript" progress={85} />)
        expect(screen.getByText('JavaScript')).toBeInTheDocument()
    })

    it('renders the progress percentage', () => {
        render(<SkillProgressBar label="React" progress={90} />)
        expect(screen.getByText('90%')).toBeInTheDocument()
    })

    it('renders a progressbar role', () => {
        render(<SkillProgressBar label="CSS" progress={75} />)
        expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('sets the correct aria value', () => {
        render(<SkillProgressBar label="Node.js" progress={60} />)
        const bar = screen.getByRole('progressbar')
        expect(bar).toHaveAttribute('aria-valuenow', '60')
    })
})
