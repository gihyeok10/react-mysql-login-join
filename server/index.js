const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zxcv123",
    database:"CRUDDataBase",
})

app.get('/',(req,res)=>{
   
   res.send("아니이걸?") 
})
app.listen(3001,()=>{
    console.log("달려요 포트 3001")
})