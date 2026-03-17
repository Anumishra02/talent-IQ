// we can do alternative of nodemon dependency directly in script dev:"node --watch server.js" this will do the same work
import express from "express";
import {ENV} from "./lib/env.js"
const app=express();
console.log(ENV.PORT)
console.log(ENV.DB_URL)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"sussess from api"})

})
app.listen(ENV.PORT,()=>console.log("Server is running on port ",ENV.PORT))