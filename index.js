"use strict";
// importamos el server express
const app = require("./server");
// importamos la config para el server
const config = require("./server/config");
// lanzamos el servidor escuchando
app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
