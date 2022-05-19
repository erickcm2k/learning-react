const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

/**
 * Middlewares
 **/
app.use(cors()); // Habilitar CORS
app.use(bodyParser.urlencoded({ extended: false })); // Poder trabajar con body
app.use(bodyParser.json()); // Poder trabajar con body
app.use(router); // Rutas

app.listen(process.env.port, () => {
  console.log(`Listening at port ${process.env.port}`);
});
