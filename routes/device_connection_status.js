const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Status = require('../models/device_connection_status_m')


router.get('/status',(req,res)=>{

    Status.find().then(result => {
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/status',(req,res)=>{
    const {status,remark} = req.body
   
   
    const statuss = new Status({
        status,
        remark
        
    })
    statuss.save().then(result=>{
        res.json({result})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router