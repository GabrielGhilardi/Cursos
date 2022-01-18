const porta = 3003
const express = require('express') // require -> importa arquivo 
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto ({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// converte para JSON
})

app.put('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto ({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id,
    })
    res.send(produto)// converte para JSON
})

app.delete('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.excluirProduto (req.params.id)
    res.send(produto)// converte para JSON
})

app.listen(porta, () => {
    console.log(`Seridor executando porta ${porta}.`)
})

