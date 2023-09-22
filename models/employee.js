const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema= new mongoose.Schema({
    firstName : {type: String, required: [true, 'Please tell us your first name!']},
    lastName : {type:String, required:[true, 'Please tell us your last name!']},
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
    department : String,
    position: String,
});


module.exports= mongoose.model('Employee',employeeSchema);