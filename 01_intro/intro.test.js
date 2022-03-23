const {sum, nativeNull} = require('./intro')

describe('Sum function:', () => {
    test('Sum should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(3, 3)).toEqual(6)
    })

    test('Sum should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(1, 3)).toBeLessThan(5)
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
    })

    test('Sum should sum float values correctly', () => {
        expect(sum(0.3, 0.2)).toBe(0.5)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Null function', () => {
    test('Should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undef,null,0,''
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})


