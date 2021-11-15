const express = require('express');
const router = express.Router();
const {
    controllerGetAll,
    controllerGetId,
    controllerAdd,
    controllerEdit,
    controllerDelete,
    controllerAuth,
    } = require('./user.controller');
const authorize = require('../auth/authorize');
const {IsAdmin, IsAdminKasir} = require('../auth/role');

// routes
router.get('/',authorize, IsAdminKasir, controllerGetAll); //admin only
router.get('/:id',authorize,IsAdminKasir, controllerGetId); //admin only
router.post('/',authorize,IsAdminKasir, controllerAdd); // all authenticated users
router.put('/',authorize,IsAdminKasir , controllerEdit); 
router.delete('/',authorize,IsAdminKasir, controllerDelete); 
router.post('/auth', controllerAuth); //public route
module.exports = router;