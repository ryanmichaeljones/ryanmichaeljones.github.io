import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useStaggeredReveal } from '@/hooks/useStaggeredReveal'

describe('useStaggeredReveal', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('starts with 0 visible items', () => {
        const { result } = renderHook(() => useStaggeredReveal(5, 100))
        expect(result.current).toBe(0)
    })

    it('reveals the first item immediately', () => {
        const { result } = renderHook(() => useStaggeredReveal(5, 100))

        act(() => {
            vi.advanceTimersByTime(0)
        })

        expect(result.current).toBe(1)
    })

    it('reveals subsequent items at the specified interval', () => {
        const { result } = renderHook(() => useStaggeredReveal(3, 100))

        // First item immediately
        act(() => {
            vi.advanceTimersByTime(0)
        })
        expect(result.current).toBe(1)

        // Second item after 100ms
        act(() => {
            vi.advanceTimersByTime(100)
        })
        expect(result.current).toBe(2)

        // Third item after another 100ms
        act(() => {
            vi.advanceTimersByTime(100)
        })
        expect(result.current).toBe(3)
    })

    it('stops revealing when all items are visible', () => {
        const { result } = renderHook(() => useStaggeredReveal(2, 100))

        act(() => {
            vi.advanceTimersByTime(0)
        })
        act(() => {
            vi.advanceTimersByTime(100)
        })

        expect(result.current).toBe(2)

        // Additional time shouldn't change anything
        act(() => {
            vi.advanceTimersByTime(500)
        })
        expect(result.current).toBe(2)
    })

    it('handles zero items', () => {
        const { result } = renderHook(() => useStaggeredReveal(0, 100))
        expect(result.current).toBe(0)

        act(() => {
            vi.advanceTimersByTime(500)
        })
        expect(result.current).toBe(0)
    })
})
