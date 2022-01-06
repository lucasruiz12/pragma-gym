const { Router } = require('express');
const { getOneClient, getAllClients, createClient, updateClient } = require('../controllers/controllers')
const router = Router();

router.get('/:dni', getOneClient)
router.get('/', getAllClients)
router.post('/', createClient)
router.put('/:dni', updateClient)


module.exports = router;