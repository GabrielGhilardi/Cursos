/*Exercícios Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repitir (elemento,repetidor){
    let lista = [] 
    for(let i=0; i < repetidor; i++){
        lista.push(elemento)
    }
    return lista
}

console.log(repitir("codigo", 3))
console.log(repitir(4, 6))