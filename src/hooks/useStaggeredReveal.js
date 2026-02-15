import { useState, useEffect } from 'react'

/**
 * Hook for progressively revealing items with staggered animation
 * @param {number} itemCount - Total number of items to reveal
 * @param {number} interval - Delay between each item reveal in milliseconds
 * @returns {number} - Number of currently visible items
 */
export const useStaggeredReveal = (itemCount, interval = 100) => {
    const [visibleItems, setVisibleItems] = useState(0)

    useEffect(() => {
        // Load items progressively with intervals
        if (visibleItems < itemCount) {
            const timer = setTimeout(() => {
                setVisibleItems(prev => prev + 1)
            }, visibleItems === 0 ? 0 : interval) // First item immediately, then at intervals

            return () => clearTimeout(timer)
        }
    }, [visibleItems, itemCount, interval])

    return visibleItems
}
