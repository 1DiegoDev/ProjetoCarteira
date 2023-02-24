//Olhe no arquivo package.json as dependencias (dependencies) usadas no projeto.
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "carteira"

});

//SELECIONAR TODOS OS dados DO BANCO
app.get("/carteira", (req, res)=>{
    const q = "SELECT * FROM entrada"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.json("Oi, Este é o backend!")
})


app.listen(8800, ()=>{
    console.log("Backend conectado!!!")
});