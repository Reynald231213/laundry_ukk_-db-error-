const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    } = require('./member.controller');
const authorize = require('../auth/authorize');
const {IsAdmin, IsAdminKasir} = require('../auth/role');

// routes
router.get('/',authorize, IsAdminKasir,controllerGetAll); 
router.get('/:id',authorize,IsAdminKasir,controllerGetId); 
router.post('/',authorize,IsAdminKasir, controllerAdd); 
router.put('/', authorize,IsAdminKasir,controllerEdit); 
router.delete('/', controllerDelete); 
module.exports = router;