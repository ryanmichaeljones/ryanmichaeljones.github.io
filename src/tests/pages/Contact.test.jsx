import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Contact } from '@/pages/Contact'

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>)

describe('Contact', () => {
    it('renders the heading', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByText('Contact Me')).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByText('Feel free to reach out using the form below!')).toBeInTheDocument()
    })

    it('renders name field', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
    })

    it('renders email field', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
    })

    it('renders subject field', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    })

    it('renders message field', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument()
    })

    it('renders the submit button', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByText('Send Message')).toBeInTheDocument()
    })

    it('renders the resume link', () => {
        renderWithRouter(<Contact />)
        expect(screen.getByText('View my resume')).toBeInTheDocument()
    })

    it('renders the footer', () => {
        renderWithRouter(<Contact />)
        const year = new Date().getFullYear()
        expect(screen.getByText(`Copyright © Ryan Jones ${year}`)).toBeInTheDocument()
    })
})
