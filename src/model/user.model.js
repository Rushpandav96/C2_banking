
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {type:String, required:true},
        middleName: {type:String, requuired:false},
        lastName: [{type:String, required:true}],
        age: [{type:Number, required:true}],
        email: [{type:String, required:true}],
        address: [{type:String, required:true}],
        gender: [{type:String, required:true}],
        type: [{type:String, required:true, default: "male"}],

    },
    {
        versionKey: false,
        timestamp: true,
    }
);


module.exports = mongoose.model("user", UserSchema);