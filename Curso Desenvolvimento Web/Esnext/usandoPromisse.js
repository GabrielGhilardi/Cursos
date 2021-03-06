// Com promisse
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        
        http.get(url, resposta => { 
            let resultado = ''
            
            resposta.on('data', dados => {
                resultado += dados 
            })
    
            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(erro) {
                    reject(erro)
                }
            })
        })
    })
}


Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(erro => console.log(erro.message))
     // o resultado do prmeiro then e pssado como parametro para o segundo