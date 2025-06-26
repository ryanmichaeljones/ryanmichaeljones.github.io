import { useState } from 'react'

export const useImageLoader = () => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    const handleLoad = () => setLoaded(true)
    const handleError = () => setError(true)

    return {
        loaded,
        error,
        handleLoad,
        handleError
    }
}
