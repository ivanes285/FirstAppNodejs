const path = require("path");
const express = require("express");
const server = express();
const morgan = require("morgan");

/*Una forma interesante de guardar datos en una variable
 que puedo utilizarlo despues a travez del metodo get*/

//Settings
server.set("port", 4000);
server.engine("html", require("ejs").renderFile);
server.set("views", path.join(__dirname, "./views"));
server.set("view engine", "ejs");

//Middlewares

//Listenig The Server
server.listen(server.get("port"), () => {
  console.log("Server listen on port ", server.get("port"));
});

//Static Files
server.use(express.static(path.join(__dirname, "public")));

//Routes
server.use(require("./routes/index"));
