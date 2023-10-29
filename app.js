const express = require("express");
require("dotenv").config();
const db = require('./db');
const UserRouter = require('./user/user.router')
const UserModel = require("./model/user.model")


const PORT = process.env.PORT || 3008

const app = express();

db.connect();

app.use(express.json());

app.get('/user', async(req, res)=>{
    const user = await UserModel.find();
res.status(200).json({user})
})

app.use('/user', UserRouter)



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})