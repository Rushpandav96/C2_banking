const mongoose = require("mongoose");

const SavingAccountSchema = new mongoose.Schema(
    {
        account_number: {type:Number, required: true},
        balance: {type:Number, required: true},
        interestRate: {type:Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("saving", SavingAccountSchema);