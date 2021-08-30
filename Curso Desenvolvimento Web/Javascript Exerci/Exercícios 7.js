/*Exercícios Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplica (numeroA, numeroB){
    let total = 0
    if(numeroA >=0 && numeroB >= 0){
        for (let i=0; i < numeroB; i++){
            total += numeroA
        }
        return total
    }
    else{
        return "Valor negativo nao valido"
    }
}

console.log(multiplica(5,5))
console.log(multiplica(0,7))
console.log(multiplica(0,-7))