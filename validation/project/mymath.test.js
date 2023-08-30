const { sum } = require('./mymath')
const { reduce } = require('./mymath')
const { cross } = require('./mymath')
const { devide } = require('./mymath')

describe.skip('testing mymath', () => {
    test('test sum should success', () => {
        let result = sum(10, 30)
        
        expect(result).toEqual(40)
    })

    test('test sum should success', () => {
        let result = reduce(30, 10)
        
        expect(result).toEqual(20)
    })

    test('test sum should success', () => {
        let result = cross(30, 10)
        
        expect(result).toEqual(300)
    })

    test('test sum should success', () => {
        let result = devide(30, 10)
        
        expect(result).toEqual(3)
    })
})