/*Exercícios Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/


function cumprimentar (nome) {
    const cumprimento = "Ola, "
    //return cumprimento + nome + "!" 
    return `${cumprimento}${nome}!` // crase 
    //return cumprimento
}

console.log(cumprimentar ("Maria"))
console.log(cumprimentar ("Leonardo"))