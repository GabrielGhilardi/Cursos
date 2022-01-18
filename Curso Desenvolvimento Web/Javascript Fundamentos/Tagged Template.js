//metodo de tag utilizado para reformulacao de String e Arrays
//Exeplo transforma os valor com templante de Real
function real (partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco= 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

//Exemplo mostra bem o que acontece com os valores
function tag (partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno =  'Guilherme'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)