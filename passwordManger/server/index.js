const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors =require('cors')

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zxcv123",
  database: "PasswordManger",
});

app.post("/addpassword", (req, res) => {
  const { password, name ,phone} = req.body;
  db.query("INSERT INTO passwords (password,name,phone) VALUES (?,?,?)", [
    password,
    name,
    phone,
  ], (err,result)=> {
    if(err){
        console.log(err)
    }else{
        res.send("Success")
    }
  });
});

app.post("/login", (req, res) => {
    console.log("/login", req.body);
    var name = req.body.name;
    var password = req.body.password;
  
    const sqlQuery =
      "select count(*) as 'cnt' from passwords where name =? and password =?;";
    db.query(sqlQuery, [name, password], (err, result) => {
      res.send(result);
      // console.log(result[0]);
      // if (result[0].cnt === 1) {
      //   res.send({ message: "success" });
      // } else {
      //   res.send({ message: "fail" });
      // }
    });
  });
app.listen(PORT, () => {
  console.log("server is running ");
});
