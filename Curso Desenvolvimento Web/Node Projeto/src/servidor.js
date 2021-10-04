const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProdutos(req.params.id))
})

app.listen(porta, () => {
    console.log(`Seridor executando porta ${porta}.`)
})

