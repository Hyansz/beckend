const { removeData } = require("../gateways/memory-storage-gateways");

const delDataUserHandler = (req, res) => {
    const id = req.body.id;
    removeData(id)
    res.send({error:false, message:"Succes"});
}

module.exports = { delDataUserHandler }