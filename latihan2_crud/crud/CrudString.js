const createData = (buah, fruit) => {
    buah.push(fruit)

    return buah
}

const readByIndex = (buah) => {
    return buah
}

const updateData = (buah, fruit, nama) => {
    buah[fruit] = nama

    return buah
}

const deleteData = (buah, fruit) => {
    buah.splice(fruit)

    return buah
}

module.exports = { createData, readByIndex, updateData, deleteData}