// we can do alternative of nodemon dependency directly in script dev:"node --watch server.js" this will do the same work
import express from "express";
import path from "path"
import {ENV} from "./lib/env.js"
const app=express();

const __dirname=path.resolve()

app.get("/health",(req,res)=>{
    res.status(200).json({msg:"api is up and running "})

})
app.get("/books",(req,res)=>{
    res.status(200).json({msg:"this is the books endpoint"})

})
//make our app ready for production
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist","dist","index.html"));
    });
}
app.listen(ENV.PORT,()=>console.log("Server is running on port ",ENV.PORT))