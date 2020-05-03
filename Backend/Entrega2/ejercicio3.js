// ########################################## 3. Servidor web regular ############################################################
// ############################## Hacer un servidor web que responda a la url / con un texto que ponga ###########################
// #################### "Hola" pero sólo por la mañana, el resto del día debería devolver una página de error 404. ###############
// ###############################################################################################################################

require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT);

app.use(function (req, res) {
  if (new Date().getHours() > 8 && new Date().getHours() < 12) {
    res.end("Hola");
  } else {
    res.statusCode = 404;
    res.end("Finiquito");
  }
});
