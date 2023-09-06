const { createData } = require('./../latihan2_crud/crud/CrudObject')

let dataMemory = []

const savingData = (name, age) => {
    dataMemory = createData(dataMemory, { name, age })
}

const showAllData = () => {
    console.log('dataMemory: ', dataMemory)
    return dataMemory
}

module.exports = { savingData, showAllData }