import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useImageLoader } from '@/hooks/useImageLoader'

describe('useImageLoader', () => {
    it('starts with loaded as false', () => {
        const { result } = renderHook(() => useImageLoader())
        expect(result.current.loaded).toBe(false)
    })

    it('starts with error as false', () => {
        const { result } = renderHook(() => useImageLoader())
        expect(result.current.error).toBe(false)
    })

    it('sets loaded to true on handleLoad', () => {
        const { result } = renderHook(() => useImageLoader())
        act(() => {
            result.current.handleLoad()
        })
        expect(result.current.loaded).toBe(true)
    })

    it('sets error to true on handleError', () => {
        const { result } = renderHook(() => useImageLoader())
        act(() => {
            result.current.handleError()
        })
        expect(result.current.error).toBe(true)
    })
})
