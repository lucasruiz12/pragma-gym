const { Client } = require('../db');

//////////////////////////////// GET ////////////////////////////////

const getAllClients = async (req, res, next) => {
    const allClients = await Client.findAll();
    try {
        allClients.length ? res.status(200).send(allClients) : res.status(404).send('No hay clientes aún')
    }
    catch (error) {
        next(error)
    }
};

const getOneClient = async (req, res, next) => {
    const { dni } = req.params;
    try {
        const oneClient = await Client.findOne({
            where: {
                dni: dni
            }
        });
        oneClient? res.status(200).send(oneClient) : res.status(404).send('No hay cliente con este número de documento')
    }
    catch (error) {
        next(error);
    }
}

//////////////////////////////// POST ////////////////////////////////

const createClient = async (req, res, next) => {
    const {
        fullname,
        dni,
    } = req.body
    const allClients = await Client.findAll()
    const checkClient = await allClients.filter((el) => dni === el.dni)

    try {
        if (!checkClient.length) {
            const newClient = await Client.create({
                fullname,
                dni,
            });
            res.status(200).send(`Cliente creado: ${newClient.fullname}`);
        }
        else {
            res.status(404).send(`Ya creaste un cliente con ese dni!`)
        }
    }
    catch (error) {
        console.log("Omar, algo anda mal!")
        next(error);
    }
}

//////////////////////////////// PUT ////////////////////////////////

const updateClient = async (req, res, next) => {
    const { dni } = req.params;
    let client = req.body;
    try {
        const updateClient = await Client.update(client, {
            where: {
                dni: dni,
            }
        })
        res.status(200).send("Usuario actualizado")
    }
    catch (error) {
        next(error)
    }
}

const updateAllNewMonth = async (req, res, next) => {
    try {
        const allClients = await Client.findAll();
        const newMonth = await allClients.map((el) => {
            const update = el.update({state: false})
        })
        console.log("Pasando todo a false");
        res.status(200).send("Nuevo mes iniciado! Todos los usuarios en rojo.")
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getAllClients,
    getOneClient,
    createClient,
    updateClient,
    updateAllNewMonth
}