module.exports = (app) => {
    app.get('/usuario', (req, res) =>{
        res.send('nodemon')
    })
    
        app.post('/usuario', (req, res) =>{
            res.send('usuario adicionado ao banco de dados')
        })
    
}