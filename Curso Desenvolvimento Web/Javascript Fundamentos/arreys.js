const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // tras a quantidade de elementos num array

valores.push({id: 3},false, null, 'teste') // adiciona um elemento no array
console.log(valores)

console.log(valores.pop())// tira do array
delete valores[0] // deleta um elemento de uma determinada posição do array
console.log(valores)

console.log(typeof valores) // Array é umo objeto 