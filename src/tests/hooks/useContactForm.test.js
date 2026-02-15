import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useContactForm } from '@/hooks/useContactForm'

describe('useContactForm', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('initializes with empty form fields', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.form).toEqual({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    })

    it('initializes with submitted as false', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.submitted).toBe(false)
    })

    it('initializes with validated as false', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.validated).toBe(false)
    })

    it('initializes with no error', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.error).toBeNull()
    })

    it('initializes with loading as false', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.loading).toBe(false)
    })

    it('updates form field on handleChange', () => {
        const { result } = renderHook(() => useContactForm())

        act(() => {
            result.current.handleChange({
                target: { name: 'name', value: 'Ryan' }
            })
        })

        expect(result.current.form.name).toBe('Ryan')
    })

    it('updates multiple fields independently', () => {
        const { result } = renderHook(() => useContactForm())

        act(() => {
            result.current.handleChange({
                target: { name: 'name', value: 'Ryan' }
            })
        })

        act(() => {
            result.current.handleChange({
                target: { name: 'email', value: 'ryan@test.com' }
            })
        })

        expect(result.current.form.name).toBe('Ryan')
        expect(result.current.form.email).toBe('ryan@test.com')
    })

    it('sets validated on submit with empty fields', async () => {
        const { result } = renderHook(() => useContactForm())

        await act(async () => {
            await result.current.handleSubmit({
                preventDefault: vi.fn()
            })
        })

        expect(result.current.validated).toBe(true)
    })

    it('does not submit when fields are empty', async () => {
        const fetchSpy = vi.spyOn(global, 'fetch')
        const { result } = renderHook(() => useContactForm())

        await act(async () => {
            await result.current.handleSubmit({
                preventDefault: vi.fn()
            })
        })

        expect(fetchSpy).not.toHaveBeenCalled()
        expect(result.current.submitted).toBe(false)
    })

    it('submits successfully with all fields filled', async () => {
        const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ ok: true })
        })

        const { result } = renderHook(() => useContactForm())

        // Fill all fields
        act(() => {
            result.current.handleChange({ target: { name: 'name', value: 'Ryan' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'email', value: 'ryan@test.com' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'subject', value: 'Test' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'message', value: 'Hello' } })
        })

        await act(async () => {
            await result.current.handleSubmit({
                preventDefault: vi.fn()
            })
        })

        // Verify fetch was called with correct data
        expect(fetchSpy).toHaveBeenCalledTimes(1)
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({ name: 'Ryan', email: 'ryan@test.com', subject: 'Test', message: 'Hello' })
            })
        )
        // Form resets after successful submission
        expect(result.current.form).toEqual({ name: '', email: '', subject: '', message: '' })
        expect(result.current.error).toBeNull()
        expect(result.current.loading).toBe(false)
    })

    it('handles server error response', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: false,
            json: () => Promise.resolve({ error: 'Server error' })
        })

        const { result } = renderHook(() => useContactForm())

        // Fill all fields
        act(() => {
            result.current.handleChange({ target: { name: 'name', value: 'Ryan' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'email', value: 'ryan@test.com' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'subject', value: 'Test' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'message', value: 'Hello' } })
        })

        await act(async () => {
            await result.current.handleSubmit({
                preventDefault: vi.fn()
            })
        })

        expect(result.current.submitted).toBe(false)
        expect(result.current.error).toBe('Server error')
    })

    it('handles network failure', async () => {
        vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'))

        const { result } = renderHook(() => useContactForm())

        // Fill all fields
        act(() => {
            result.current.handleChange({ target: { name: 'name', value: 'Ryan' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'email', value: 'ryan@test.com' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'subject', value: 'Test' } })
        })
        act(() => {
            result.current.handleChange({ target: { name: 'message', value: 'Hello' } })
        })

        await act(async () => {
            await result.current.handleSubmit({
                preventDefault: vi.fn()
            })
        })

        expect(result.current.submitted).toBe(false)
        expect(result.current.error).toBe('Something went wrong. Please try again later.')
    })
})
