const { editDataName } = require("../gateways/memory-storage-gateways");

const putDataUserHandler = (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    editDataName(id, name)

    res.send({error:false, message:"Succes"})
}

module.exports = { putDataUserHandler }