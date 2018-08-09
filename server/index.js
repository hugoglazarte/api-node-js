"use strict";

const express = require('express');
const morgan = require('morgan');   //  ayuda a registrar el acceso a todas las rutas e imprimirlas por pantalla
const logger = require('winston');  // permite utilizar un log personalizado para imprimir por pantalla e inclusive guardarlos en archivos.

/*
Lamentablemente no obtenemos la respuesta que deseamos
ya que el cuerpo del documento se debe procesar antes,
para esto existe un paquete que nos ayudará con esta parte
"body parser", instalamos el paquete como una dependencia de
nuestro proyecto:
*/
const bodyParser = require('body-parser'); //

const api = require("./api/v1");

const app = express();
// Setup middleware
app.use(morgan("common"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Setup router and routes
app.use("/api", api);
app.use("/api/v1", api);

// exportamos el modulo de conexion express
module.exports = app;
