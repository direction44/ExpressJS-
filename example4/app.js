const express=require("express")
const app=express()

app.get("/",(req,resp)=>{
    resp.send("<h1>Hello Good morning</h1>")
})

const server=app.listen(3000,()=>{
    console.log("server is started")
})