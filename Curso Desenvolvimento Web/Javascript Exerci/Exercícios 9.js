/*Exercícios Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(x) {
    let resultado = ""
    for (let i=0 ; i<x ; i++ ){
    resultado += "+"
    }


    return '+'.repeat(x)
}

console.log(simboloMais(2))
console.log(simboloMais(6))

function simboloMais2 (quantidade){
    return "+".repeat(quantidade)
}

console.log(simboloMais2(8))
console.log(simboloMais2(1))