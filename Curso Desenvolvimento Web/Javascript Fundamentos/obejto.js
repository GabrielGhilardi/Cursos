// Objeto é uma coleção de chave e valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90

console.log(prod1)

const prod2 = {
    nome: 'camisa Polo',
    preco: 79.90,
}

console.log(prod2)

//Transforma objeto em um arry de chave ou valores 
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
//Tranforma em uma matriz de chave e valores
console.log(Object.entries(obj))