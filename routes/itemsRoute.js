const express = require('express') 
const router = express.Router() 
const itemsController = require('../controllers/itemsController') 

router.get('/items', itemsController.itemsPage) 

module.exports = router;