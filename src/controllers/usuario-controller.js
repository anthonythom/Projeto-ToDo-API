// const res = require("express/lib/response");
// const res = require("express/lib/response");
// const bd = require("../models/atividades-models");


const usuario = require('../models/usuario-model');

const usuario = (app, bd) => {
    app.get('/usuario', (req, res) => {
        res.json('{usuario: bd.usuario}')

    })

    app.post('/usuario', (req, res) => {
        //     res.send('usuario adicionado ao banco de dados') 
        // let nome = req.body.nome;
        // let senha = req.body.senha;
        // let body = req.body;
        // res.send('O nome do aluno é: ' + nome + ' e sua senha é: ' + senha);
        // res.json({ "NovoUsuario": body })
        try{
            //variavel que recebe meu corpo
        const body = req.body
        //passando para o meu modelo o meu corpo
        const NovoUsuario = new usuario(body.nome, body.email, body.senha)
//inserção da minha entidade no array
        bd.usuario.push(NovoUsuario)
        console.log(bd.usuario)

        res.json({
            "requisicao": NovoUsuario,
            "meubanco": bd.usuario,
            "erro": false
        })
    } catch (error) {
        // Resposta em caso de erro
        res.json({
            "mensager": error.message,
            "erro": true
        })
    }
    
    })

}
module.exports = usuario;