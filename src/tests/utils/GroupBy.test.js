import { describe, it, expect } from 'vitest'
import { groupBy } from '@/utils/GroupBy'

describe('groupBy', () => {
    it('groups items by key', () => {
        const items = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = groupBy(items, (_, i) => Math.floor(i / 2))

        expect(result).toEqual([
            ['a', 'b'],
            ['c', 'd'],
            ['e', 'f']
        ])
    })

    it('handles uneven groups', () => {
        const items = ['a', 'b', 'c', 'd', 'e']
        const result = groupBy(items, (_, i) => Math.floor(i / 2))

        expect(result).toEqual([
            ['a', 'b'],
            ['c', 'd'],
            ['e']
        ])
    })

    it('handles empty array', () => {
        const result = groupBy([], () => 0)
        expect(result).toEqual([])
    })

    it('handles single item', () => {
        const result = groupBy(['only'], () => 0)
        expect(result).toEqual([['only']])
    })

    it('groups by item value', () => {
        const items = [
            { type: 'fruit', name: 'apple' },
            { type: 'veg', name: 'carrot' },
            { type: 'fruit', name: 'banana' }
        ]
        const result = groupBy(items, (item) => item.type)

        expect(result).toEqual([
            [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }],
            [{ type: 'veg', name: 'carrot' }]
        ])
    })
})
