module.exports = (app) => {
    app.get('/atividade', (req, res) => {
        res.send('rota ativada com GET e recurso atividades: valores de usuarios devem ser retornados')

    })
    app.post('/atividade', (req, res) => {
        res.send('atividade adicionada ao banco de dados')
    })
    }