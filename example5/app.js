const express=require("express")
const app=express()

app.get("/",(req,resp)=>{
    const person={name:"Disha",age:27,gender:"Female"}
    resp.send(person)
})


const server=app.listen(3000,()=>{
    console.log(`server started  at ${server.address().port}`)
})