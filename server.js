const express = require("express");
const app = express();

// arquivos estáticos (CSS, imagens)
app.use(express.static("public"));

// EJS
app.set("view engine", "ejs");

// rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});