var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "CuentaPrueba",
    password: "Limanguer12",
    database: "retofinal"
});
//listas
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT ppmco FROM lecturaco ORDER BY id DESC LIMIT 1;", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
/*

//un solo valor
con.connect(function(err) {
    if (err) throw err;
     con.query("SELECT ppmco FROM lecturaco ORDER BY id DESC LIMIT 1;", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
*/
/*Seccion de querys
Temperatura
SELECT temperatura FROM lecturatemperatura ORDER BY id DESC LIMIT 1

Humedad
SELECT humedad FROM lecturahumedad ORDER BY id DESC LIMIT 1

PpmCO2
SELECT ppmco2 FROM lecturaco2 ORDER BY id DESC LIMIT 1

LLuvia
SELECT lluvia FROM lecturalluvia ORDER BY id DESC LIMIT 1


*/