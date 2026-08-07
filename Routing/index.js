const { v4: uuidv4 } = require("uuid");
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override")

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "delta_connection"
});

app.get("/", (req,res)=> {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q,(err,result) => {
        if(err) throw err;
                let count = result[0]["count(*)"];
                res.render("home.ejs", {count});
        });
        }catch(err){
    console.log(err);
    res.send("some err n database")
}

})

//get show users route

app.get("/user",(req,res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q,(err,result) => {
        if(err) throw err;
            console.log(result)
            // res.send(result)
            res.render("showUser.ejs", {result})
        });
        }catch(err){
    console.log(err);
    res.send("some err n database")
}
})
//edit route

app.get("/user/:id/edit" ,(req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`
    try{
        connection.query(q,(err,result) => {
        if(err) throw err;
            let a = result[0];
            // res.send(result)
            res.render("edit.ejs",{a})
        });
        }catch(err){
    console.log(err);
    res.send("some err n database")
}
  
})

app.get("/user/add", (req,res) => {
    res.render("add.ejs")
})
app.get("/user/:id/delete", (req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let a = result[0];
            res.render("delete.ejs",{a})
        })
    }catch(err) {
        console.log(err)
        res.send("some errin the database")
    }
})
//update route

app.patch("/user/:id/", (req,res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`
    try{
        connection.query(q,(err,result) => {
        if(err) throw err;
            let a = result[0];
            // res.send(result)
            if(formPass != a.password){
                return res.send("wrong password")
            }else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
         
        });
        }catch(err){
    console.log(err);
    res.send("some err n database")
}
  
})

app.delete("/user/:id", (req,res) => {
    console.log("ok")
    let {id} = req.params;
    let {password: formPass} = req.body
    let q = `SELECT * FROM user WHERE id = '${id}'`
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let a = result[0];
            if(formPass != a.password) {
                return res.send("wrong password")
            }else{
                let q2 = `DELETE FROM user WHERE id = '${id}'`
                connection.query(q2,(err,result) => {
                    if(err) throw err;
                    res.redirect("/user")
                })
            }
            
        });
    }catch(err) {
        console.log(err);
        res.send("some error in the database")
    }
   
})

app.post("/user", (req,res) => {
    const id = uuidv4();
     let {
        username: formName,
        email: formEmail,
        password: formPass
    } = req.body;
    let q = `INSERT INTO user (id,username,email,password)
    values (
     '${id}',
    '${formName}',
    '${formEmail}',
    '${formPass}'
    )`
    connection.query(q, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
 })

})

app.listen("8080", () => {
    console.log("server is listening to port at 8080")
})

// try{
// connection.query(q,[data],(err,result) => {
//     if(err) throw err;
//     console.log(result);
// });
// }catch(err){
//     console.log(err);
// }
// connection.end();