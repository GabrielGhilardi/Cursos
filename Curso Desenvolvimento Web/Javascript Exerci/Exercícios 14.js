/*Exercícios Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function somentePares (array){
    const resultado = []
    for (let i=0; i < array.length; i++){
        if(i % 2 === 0){
            if (array[i] % 2 === 0){
            resultado.push(array[i])
            }
        }
    }
    return resultado 
}

console.log(somentePares([1, 2, 3, 4]))
console.log(somentePares([10, 70, 22, 43]))