const { Router } = require('express');
const itemsCtrl = require('../controllers/items.js');

const router = Router();

router.post('/', itemsCtrl.createItem);

module.exports = router;