const mongoose = require('mongoose')



const device_connection_status_m = new mongoose.Schema({
    status:{
        type: String
    },
    remark: {
        type: String
        
    }
});



module.exports = mongoose.model('Status', device_connection_status_m);