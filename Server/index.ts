import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;


app.get("/",(req,res)=>{
    res.send("Welcome to Express server")
})

app.listen(PORT,()=>console.log("Listening at port 5000"))