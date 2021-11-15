const models = require("../../models/index");
const detail_transaksi = models.detail_transaksi;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const config = require('../auth/secret.json');

module.exports = {
    controllerGetAll:(req,res)=>{
        detail_transaksi.findAll()
        .then(result => {
            res.json({
                success : 1,
                data : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerGetId:(req,res)=>{
        const param = { id_detail_transaksi: req.params.id_detail_transaksi}
        detail_transaksi.findOne({where:param})
        .then(result => {
            res.json({
                success : 1,
                data : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerAdd:(req,res)=>{
        const data = {
            id_detail_transaksi: req.body.id_detail_transaksi,
            id_paket : req.body.id_paket,
            id_transaksi : req.body.id_transaksi,
            qty : req.body.qty
        }
        detail_transaksi.create(data)
        .then(result => {
            res.json({
                success : 1,
                data : result,data
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerEdit:(req,res)=>{
        const param = { id_detail_transaksi: req.body.id_detail_transaksi}
        const data = {
            id_detail_transaksi: req.body.id_detail_transaksi,
            id_paket : req.body.id_paket,
            id_transaksi : req.body.id_transaksi,
            qty : req.body.qty
        }
        detail_transaksi.update(data , {where: param})
        .then(result => {
            res.json({
                success : 1,
                data : result,data
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
    controllerDelete: (req,res)=>{
        const param = { id_detail_transaksi: req.body.id_transaksi}
        detail_transaksi.destroy({where: param})
        .then(result => {
            res.json({
                success : 1,
                data : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    },
        controllerAuth: async (req,res)=>{
            const data = {
                username : req.body.username,
                password : md5(req.body.password)
            }
            let result = await user.findOne({where: data})
            if(result){
                // generate token
                let token = jwt.sign({ sub: result.id_user, role: result.role }, config.secret)
                res.json({
                    logged: true,
                    data: result,
                    token: token
                })
            }else{
                res.json({
                    logged: false,
                    message: "Username or password is incorrect",
                    data: result
                })
            }   
        }    
    }   
