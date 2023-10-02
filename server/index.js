const express = require("express");
const app = express();

const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    // database:"react_empleados_crud"
    database:"1_react_crud"
});

// app.post('')

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES (?, ?, ?, ?, ?)',
  [nombre, edad, pais, cargo, anios],
  (err, results) => {
    if (err) {
      console.error("Error al insertar empleado:", err);
      res.status(500).json({ error: "Error al insertar empleado" });
    } else {
      console.log("Empleado registrado correctamente");
      res.status(200).json({ message: "Empleado registrado correctamente" });
    }});

})

app.listen(3001, ()=>{
    console.log("Corriendo en el Puerto 3001");
})
// db.query('SELECT * FROM empleados', (err, rows)=>{
//     if(err) throw err
//     console.log('los datos olicitados son:')
//     console.log(rows)
// })
