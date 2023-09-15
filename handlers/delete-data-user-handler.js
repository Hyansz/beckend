const { removeData } = require("../gateways/memory-storage-gateways");

const deleteDataUserHandler = (req, res) => {
    const id = req.body.id;
    console.log(req.body, 'id');

    removeData(id);

    res.send({ error: false, message: 'berhasil' });
};

module.exports = { deleteDataUserHandler };