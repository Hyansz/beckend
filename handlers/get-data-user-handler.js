const { showAllData } = require("../gateways/memory-storage-gateways")

const getDataUserHandler = (req, res) => {
    res.send({ data: showAllData() });
};

module.exports = { getDataUserHandler };