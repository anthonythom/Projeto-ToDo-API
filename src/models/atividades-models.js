module.exports = usuario;
var id = 0;
class usuario {
    constructor(nome, email, senha, id) {
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }
}