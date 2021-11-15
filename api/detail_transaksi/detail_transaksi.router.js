const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerAuth,
    } = require('./detail_transaksi.controller');
const authorize = require('../auth/authorize');
const {IsAdmin} = require('../auth/role');

// routes
router.get('/', controllerGetAll); //admin only
router.get('/:id',controllerGetId); //admin only
router.post('/', controllerAdd); // all authenticated users
router.put('/' , controllerEdit); 
router.delete('/',controllerDelete); 
router.post('/auth', controllerAuth); //public route
module.exports = router;