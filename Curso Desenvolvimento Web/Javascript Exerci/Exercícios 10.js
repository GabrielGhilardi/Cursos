/*Exercícios Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/

function primeiroUltimo (lista){
    const primeiroLista = lista.shift()
    const ultimoLista = lista.pop()

    return [primeiroLista, ultimoLista]
}

console.log(primeiroUltimo([7,14,"olá"]))
console.log(primeiroUltimo([-100, "aplicativo", 16]))