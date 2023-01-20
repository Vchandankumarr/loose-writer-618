const express=require("express")
const {connection}=require("./config/db")
require("dotenv").config
const{userrouter}=require("./routees/userrouter")
const{adminproduct}=require("./routees/adminproduct.router")
const {userrender}=require("./routees/userrenderrouter")
const{authentication}=require("./middlewares/authenticationmiddleware")
const cors = require('cors')


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>
{
    res.send({"message":"welcome to HOME PAGE"})
})

app.use("/usersrender", userrender)
app.use("/adminproducts",adminproduct)

app.use("/users",userrouter)
app.use(authentication)




app.listen(process.env.port, async()=>
{
    try {
        await connection
        console.log("connected to data base")
    } catch (error) {
        console.log(error)
    }
console.log(`server is running at port ${process.env.port}`)
})