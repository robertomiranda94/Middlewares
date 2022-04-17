const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../logs/userLogs.txt");

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

function userLogs(req, res, next) {
  fs.appendFileSync(
    filePath,
    hoy.toISOString() +
      " - " +
      "El usuario ingresó a la ruta: " +
      req.url +
      "\r\n"
  );
  next();
}

module.exports = userLogs;
