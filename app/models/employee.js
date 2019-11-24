const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeScheme = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    departmentId:{
        type:Schema.Types.ObjectId,
        ref:'Department',
        required:true
    }
})

const Employee = mongoose.model('Employee',employeeScheme)

module.exports= Employee