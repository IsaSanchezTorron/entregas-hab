// REQUIRES
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

//JSONWEBTOKEN DEPENDENCIAS
const jwt = require("jsonwebtoken");
const config = require("./config");

// LANZAMOS LA APP
const app = express();

// USOS DE LA APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("llave", config.llave);

// DATOS DE CONEXIÓN
const connection = mysql.createConnection({
  host: "localhost",
  user: "isabel",
  password: "12345678",
  database: "hackamarket",
});

// CONEXIÓN
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Base de datos conectada 🐳");
  }
});

// PUERTO DE LA API
const PORT = 3050;

app.listen(PORT, () => console.log("Api en marcha 🙆"));

// LAMADA DE PRUEBA
app.get("/", (req, res) => {
  res.send("Llamada de prueba 🦊");
});

//RECOGIENDO TODOS LOS PRODUCTOS
app.get("/productos", (req, res) => {
  const sql = "SELECT * FROM productos";
  //CONEXIÓN Y EJECUCIÓN DEL SQL
  connection.query(sql, (error, results) => {
    //SI HAY ERROR QUE LO MUESTRE
    if (error) throw error;
    //COMPROBAR QUE LA RESPUESTA NO VIENE VACÍA
    if (results.length > 0) {
      res.json(results);

      //EN CASO DE QUE VENGA VACÍA
    } else {
      res.send("Lista de productos no encontrada");
    }
  });
});

//FUNCIÓN PARA RECUPERAR TODOS LOS CLIENTES DE LA BBDD
app.get("/clientes", (req, res) => {
  //SECUENCIA SQL
  const sql = "SELECT * FROM clientes";
  //CONEXIÓN
  connection.query(sql, (error, results) => {
    //SI SALE MAL
    if (error) {
    }
    //SI TENEMOS RESULTADOS
    if (results.length > 0) {
      res.json(results);
    }
    //SI NO HAY CLIENTES
    else {
      res.send("No hay clientes 💩");
    }
  });
});

//FUNCIÓN PARA REGISTRAR UN NUEVO USUARIO
app.post("/register", (req, res) => {
  //SECUENCIA SQL
  const sql = "INSERT INTO usuarios SET ?";

  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };
  //CONEXIÓN
  connection.query(sql, newUser, (error) => {
    //SI SALE MAL
    if (error) {
      throw error;
    } else {
      res.send("Te has registrado 🐼");
    }
  });
});

//FUNCIÓN PARA EDITAR UN CLIENTE
app.put("/clientes/update/:id", (req, res) => {
  const { id } = req.body;
  const { nombre } = req.body;
  const { apellido } = req.body;
  const { ciudad } = req.body;
  const { empresa } = req.body;

  //Secuencia sql
  const sql = `UPDATE clientes SET nombre='${nombre}', apellido='${apellido}', ciudad='${ciudad}', empresa='${empresa}' WHERE id = ${id}`;

  //Conexión donde enviamos la query y tenemos respuesta
  connection.query(sql, (error) => {
    //SI SALE MAL
    if (error) {
      throw error;
    } else {
      res.send("Cliente editado 🐸");
    }
  });
});

//FUNCIÓN PARA BORRAR UN CLIENTE
app.delete("/clientes/del/:id", (req, res) => {
  const { id } = req.params;
  //Secuencia SQL
  const sql = `DELETE FROM clientes WHERE id = ${id}`;

  //Conexión donde enviamos la query y tenemos respuesta
  connection.query(sql, (error) => {
    //Si sale mal
    if (error) {
      throw error;
      //Si sale bien
    } else {
      res.send("Cliente borrado 🐸");
    }
  });
});

//FUNCIÓN PARA CREAR UN NUEVO CLIENTE
app.post("/add-client", (req, res) => {
  //Secuencia SQL
  const sql = "INSERT INTO clientes SET ?";
  // Destructuring de lo que le llega por el body
  const newClient = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    ciudad: req.body.ciudad,
    empresa: req.body.empresa,
  };
  //Conexión, enviamos la query y obtenemos respuesta.
  connection.query(sql, newClient, (error) => {
    //Si sale mal
    if (error) {
      throw error;
    } else {
      //Si sale bien
      res.send("Cliente creado");
    }
  });
});

//MÉTODO LOGIN QUE CREA EL TOKEN
app.post("/auth", (req, res) => {
  //DATOS QUE LLEGAN, email y password
  const email = req.body.email;
  const password = req.body.password;

  //SECUENCIA SQL
  const sql = `SELECT * FROM usuarios WHERE email='${email}' AND password ='${password}'`;

  // CONEXIÓN A LA BBDD

  connection.query(sql, (error, results) => {
    let admin = null;
    if (error) throw error;
    if (results.length > 0) {
      const payload = {
        check: true,
      };

      if (results[0].admin === 1) {
        admin = true;
      } else {
        admin = false;
      }
      const token = jwt.sign(payload, app.get("llave"), {
        expiresIn: "1 day",
      });
      res.json({
        mensaje: "Autenticación correcta",
        token: token,
        admin: admin,
      });
    } else {
      console.log("Datos incorrectos");
    }
  });
});
