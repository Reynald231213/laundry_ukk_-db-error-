const models = require("../../models/index");
const transaksi = models.transaksi;
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const config = require('../auth/secret.json');

module.exports = {
    controllerGetAll:(req,res)=>{
        transaksi.findAll()
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
        const param = { id_transaksi: req.params.id_transaksi}
        transaksi.findOne({where:param})
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
            id_transaksi: req.body.id_transaksi,
            tgl: req.body.tgl,
            batas_waktu : req.body.batas_waktu,
            tgl_bayar : req.body.tgl_bayar,
            status : req.body.status,
            dibayar : req.body.dibayar,
            id_user : req.body.id_user,
            id_member : req.body.id_member,
            id_outlet : req.body.id_outlet,
        }
        transaksi.create(data)
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
        const param = { id_transaksi: req.body.id_transaksi}
        const data = {
            id_transaksi: req.body.id_transaksi,
            tgl: req.body.tgl,
            batas_waktu : req.body.batas_waktu,
            tgl_bayar : req.body.tgl_bayar,
            status : req.body.status,
            dibayar : req.body.dibayar,
            id_user : req.body.id_user,
            id_member : req.body.id_member,
            id_outlet : req.body.id_outlet,
        }
        transaksi.update(data , {where: param})
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
        const param = { id_transaksi: req.body.id_transaksi}
        transaksi.destroy({where: param})
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
