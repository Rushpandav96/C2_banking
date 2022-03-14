const express = require("express");

const userController = require("./controllers/user.controller");
const branchController = require("./controllers/branch.controller");
const masterController = require("./controllers/master.controller");
const savingController = require("./controllers/saving.controller");
const fixacController = require("./controllers/fixac.controller");


const connect = require("./src/db");

const app = express();
app.use(express.json());

app.use("/user", userController);
app.use("/branch", branchController);
app.use("/master", masterController);
app.use("/saving", savingController);
app.use("/fixac", fixacController);


app.listen(1010, async function(){
    try{
        await connect();
        console.log("hearing to port 1010");
    }catch(err){
        console.log("err:", err);
    }
})