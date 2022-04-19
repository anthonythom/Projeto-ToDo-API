const express = require("express");
var app = express();

// bodyParser
app.use(express.json)

//importa rotas
const AtividadeController = require('./controllers/atividades-controller');
const UsuarioController = require('./controllers/usuario-controller');
const bd = require("./infra/bd");

//importa classes
const usuario = require('./models/usuario-model')
const NovoUsuario = new usuario("Thomas", "anthonythomascontato@gmail.com", "1234")
console.log(NovoUsuario);


//executa arquivos importados
UsuarioController(app)
AtividadeController(app)

//


app.listen(8000,()=> {
    console.log('rodando na porta 8000')
})


