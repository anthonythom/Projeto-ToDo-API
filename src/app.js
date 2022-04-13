const express = require("express");
var app = express();


const AtividadeController = require('./controllers/atividades-controller');
const UsuarioController = require('./controllers/usuario-controller');

UsuarioController(app)
AtividadeController(app)

app.listen(8000,()=> {
    console.log('rodando na porta 8000')
})


