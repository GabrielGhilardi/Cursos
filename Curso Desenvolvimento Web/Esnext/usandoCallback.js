// Sem promisse
const http = require('http')

const getTurmea = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => { 
        let resultado = ''
        resposta.on('data', dados =>{
            resultado += dados 
        })

        resposta.on('end',() =>{
            callback(JSON.parse(resultado))
        })
    })
}

//Callback dentro de callback
let nomes = []
getTurmea('A', alunos => {
    /*console.log(alunos)
    console.log(alunos[0].nome)*/
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurmea('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurmea('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})