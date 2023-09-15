const createData = (bank, data) => {
    bank.push(data);
    return bank;
};

const findById = (bank, id) => {
    return bank.find((value) => value.id === id);
};

const findByName = (bank, name) => {
    return bank.find((value) => value.name.includes(name));
};

const updateData = (bank, id, value, num) => {
    // mencari index [0,1,2,...]
    if (typeof id === 'string') {
        id = parseInt(id);
    }

    const index = bank.findIndex((value, num) => value.id || num.id === id);

    // mengubah data berdasarkan id
    bank[index] = { ...bank[index], ...id, name: value, age: num };


    // mengembalikan seluruh data yg telah diubah
    return bank;
};

const deleteData = (bank, id) => {
    const index = bank.findIndex((value) => {
        return value.id === id;
    });

    console.log('5. index', index);

    bank.splice(index, 1);
    return bank;
};

module.exports = { createData, findById, updateData, deleteData, findByName };