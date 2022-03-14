
const mongoose = require("mongoose");

const BranchDetailSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        address: {type:String, required:true},
        IFSC: {type:String, required:true},
        MICR: {type:Number, required:true},

    },
    {
        versionKey: false,
        timestamp: true,
    }
);


module.exports = mongoose.model("branch", BranchDetailSchema);