const { Router } = require('express');
const { getOneClient, getAllClients, createClient, updateClient, updateAllNewMonth } = require('../controllers/controllers')
const router = Router();

router.get('/:dni', getOneClient)
router.get('/', getAllClients)
router.post('/', createClient)
router.put('/:dni', updateClient)
router.put('/', updateAllNewMonth)


module.exports = router;