const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    } = require('./paket.controller');
const authorize = require('../auth/authorize');
const {IsAdmin, IsAdminKasir} = require('../auth/role');

// routes
router.get('/',authorize,IsAdmin, controllerGetAll); //admin only
router.get('/:id',authorize,IsAdmin, controllerGetId); //admin only
router.post('/', authorize,IsAdmin,controllerAdd); // all authenticated users
router.put('/', authorize,IsAdmin,controllerEdit); 
router.delete('/', controllerDelete); 
module.exports = router;