const fs = require("fs");
const path = require("path");
const { index } = require("../controllers/mainController");
const filePath = path.join(__dirname, "../logs/authLogs.txt");
const users = require("../data/users");

function authLogs(req, res, next) {
  if (users.indexOf(req.query.user) != -1) {
    fs.appendFileSync(
      filePath,
      "Acceso autorizado - User: " + req.query.user + "\r\n"
    );
    next();
  } else {
    fs.appendFileSync(
      filePath,
      "Acceso NO AUTORIZADO - User: " + req.query.user + "\r\n"
    );
    res.send("Acceso NO AUTORIZADO - User: " + req.query.user + "\r\n");
  }
}

module.exports = authLogs;
