export function groupBy(list, keyGetter) {
    const map = new Map()
    list.forEach((item, i) => {
        const key = keyGetter(item, i)
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(item)
    })
    return Array.from(map.values())
}