//Exercícios Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(x  ,y){
    if(typeof x != typeof y){
        return false
    }
    else{
        return x >= y
    }
}

console.log(maiorOuIgual(2,3))
console.log(maiorOuIgual(2,"3"))
console.log(maiorOuIgual(5,3))
 
let numneros = [1, 2, 2, 3, 4]
let semRepitidos = [...new Set(numneros)]
console.log(semRepitidos)

const maior = (n1, n2) => Number(n1) >= Number(n2) 
console.log(maior(2, 7))