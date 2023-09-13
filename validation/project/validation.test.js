const { nameValidation } = require('./validation')
const { ageValidation } = require('./validation')

describe.skip('testing validation', () => {
    test('when input less 3 character should error', () => {
        let result = nameValidation('ab')

        expect(result).toEqual({ error: true, message: 'Nama Minimal 3 Huruf' })
    })

    test('when input number should error', () => {
        let result = nameValidation('12345')

        expect(result).toEqual({ error: true, message: 'Nama Harus Menggunakan Huruf' })
    })
    
    test('when input more 20 character should error', () => {
        let result = nameValidation('qwertyuioplkjhgfdsazxc')

        expect(result).toEqual({ error: true, message: 'Nama Maximal 20 Huruf' })
    })

    test('when input space only character should error', () => {
        let result = nameValidation('         ')

        expect(result).toEqual({ error: true, message: 'Nama Minimal 3 Huruf' })
    })

    test('should success', () => {
        let result = nameValidation('Namaku')

        expect(result).toEqual({ error: false, message: 'OK', data: 'Namaku' })
    })

    test('should success', () => {
        let result = nameValidation('Namanya')

        expect(result).toEqual({ error: false, message: 'OK', data: 'Namanya' })
    })
})

describe.skip('test ageValidation', () => {
    test('when less 12 should error', () => {
        let result = ageValidation(12)

        expect(result).toEqual({ error: true, message: 'umur harus lebih dari 12'})
    })

    test('when more 80 should error', () => {
        let result = ageValidation(80)

        expect(result).toEqual({ error: true, message: 'umur harus kurang dari 80'})
    })
})