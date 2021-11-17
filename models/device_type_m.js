const mongoose = require('mongoose')



const device_type_m = new mongoose.Schema({
    device_name: {
        type: String,
        trim:true
    },
    device_version: {
        type:String,
        trim:true
    },
    supported_os: {
        type: Object,
        
    },
    remarks: {
        type: String,
        trim:true
    }
});



module.exports = mongoose.model('Type', device_type_m);