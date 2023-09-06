const nameValidation = (name) => {
    name = name.trim();

    if(name.length <= 3) {
        return { error: true, message: 'Nama Minimal 3 Huruf' }
    }

    if(!isNaN(parseInt(name))) {
        return { error: true, message: 'Nama Harus Menggunakan Huruf' }
    }

    if(name.length >= 20) {
        return { error: true, message: 'Nama Maximal 20 Huruf' }
    }

    return { error: false, message: 'OK', data: name }
}

const ageValidation = (age) => {

    if(age <= 12) {
        return { error: true, message: 'umur harus lebih dari 12'}
    }

    if(age >= 80) {
        return { error: true, message: 'umur harus kurang dari 80'}
    }

    if(age != true) {
        return { error: false, message: 'Confirm', data: age }
    }

}

module.exports = { nameValidation, ageValidation }