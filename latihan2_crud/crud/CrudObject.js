const createData = (nama, data) => {
    nama.push(data)

    return nama
}

const findById = (cari, id) => {
    return cari.find((value) => value.id === id)
}

const updateData = (data, id, value) => {
    const index = data.findIndex((value) => value.id === id)
    
    data[index] = {id, name: value}

    return data
}

const deleteData = (data, id) => {
    const index = data.findIndex((value) => value.id === id)
    
    data.splice(index, 1)

    return data
}

module.exports = { createData, findById, updateData, deleteData }