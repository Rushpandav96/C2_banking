const { Timestamp } = require("bson");
const mongoose = require("mongoose");


const MasterAccountSchema = new mongoose.Schema(
    {
        balance: {type:Number, required:true}
        user_id: {type:mongoose.Schema.Types.ObjectId, ref: "user"},
        branch_id: {type:mongoose.Schema.Types.ObjectId, ref: "branch"},

    },

    {
        versionKey: false,
        timestamp: true,
    }
);


module.exports = mongoose.model("master", MasterAccountSchema);