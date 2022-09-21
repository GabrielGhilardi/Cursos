// Ressponsavel pelo corpo da requisicao - iterpreta os dados e deixa pronto para manipulcao
const bodyParser = require('body-parser')
// responsavel por instanciar o servidor
const  express = require('express')
// Multer upload de arquivos - multer é uma biblioteca
const multer = require('multer')


const app = express()
// Dentro da pasta atual '.' onde esta o server.js o servidor vai prover que tenha acesso aos arquivos staticos, como, CSS, fontes, etc...
app.use(express.static ('.'))
// recebe os dados pelo um submit de um formulario e trasforma em objeto
app.use(bodyParser.urlencoded({extended: true}))
// recebe o JSON e transforma em objeto
app.use(bodyParser.json())
//  quando vir um requisicao do tipo get ma url /teste , chama funcao que retorna Ok, somente para teste
app.get('/teste', (req, res) => res.send('ok'))
// inicializa o servidor na porta 8080 - npm star
app.listen(8080, () => console.log('Executando...'))


// responsavel por setar o lugar de salvar e nomear o arquivo - objeto
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
//funcao de anexao as informacoes requeridas pelo objeto storage no aquivo recebido 
const upload = multer ({storage}).single('arquivo')

// responsavel por executar a acao de  gravar 
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um Erro.')
        }
        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send ({
        ...req.body,
        id: 1
        
    })
})

//app.listen(8080, () => console.log ('Executanto.......'))
