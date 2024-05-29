const mongoose = require('mongoose')

const alianSchema = new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    branch:{
        type:String,
        required: true,
        default:"IT"
    },
    college:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('student',alianSchema)