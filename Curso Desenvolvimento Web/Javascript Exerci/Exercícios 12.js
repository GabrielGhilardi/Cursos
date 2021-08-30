/*Exercícios Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function filtrarNumeros (array) {
const resultado = array.filter(elemento => typeof elemento === "number") // funçãp arrow seria  fuction compara (elemento){ const resultado = typeof elemento === "number" return resultado}
return resultado
}
 
console.group(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
