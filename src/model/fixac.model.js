const mongoose = require("mongoose");

const FixedAccountSchema = new mongoose.Schema(
    {
        account_number: {type:Number, required:true},
        balance: {type:Number, required:true},
        interestRate: {type:Number, required:true},
        startDate: {type:Number, required:true},
        maturityDate: {type:Number, required:true},
        master_acc: {type:mongoose.Schema.Types.ObjectId,ref:"master"},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("fixed", FixedAccountSchema);