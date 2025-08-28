const express=require('express')
const app=express()
app.get("/",(req,resp)=>{
    resp.send("Good Morning")
})

const server=app.listen(3000,()=>{
    console.log("server started at "+server.address().port)
})