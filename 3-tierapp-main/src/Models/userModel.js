var mongoose = require('mongoose')

let userSchema = new mongoose.Schema({

    mobileNumber: {
        type:String,
        default:null
    },
    firstName: {
        type: String,
        default: ""
    },
},{
    timestamps: true
});

exports.userModel = mongoose.model('user', userSchema);