const { createData, updateData, deleteData, findByname } = require("../latihan2_crud/crud/CrudObject");

let dataMemory = [];

const savingData = (name, age) => {
    let id = Math.ceil(Math.random() * 1000);
    dataMemory = createData(dataMemory, { id, name, age });
};

const showAllData = () => {
    return dataMemory;
};

const getDataByName = (name) => {
    return findByname(dataMemory, name);
};

const editDataName = (id,name,age) => {
    dataMemory = updateData(dataMemory, id, name, age)
    
    return dataMemory;
}

const removeData = (id) => {
    console.log('4. id',id);

    if (typeof id === 'string') {
        id = parseInt(id);
    }
    
    dataMemory = deleteData(dataMemory, id);

    return dataMemory;
};

module.exports = {
    savingData,
    showAllData,
    editDataName,
    removeData,
    getDataByName,
};