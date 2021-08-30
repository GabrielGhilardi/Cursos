//Exercícios Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

function convertIdade (idade) {
    const ano = 365
    let resultado = idade * ano
    return resultado + " dias"
}

console.log(convertIdade(33))